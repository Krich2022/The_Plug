var searchVar = document.getElementById("searchButton");
var inputVar = document.getElementById("inputField");

searchVar.addEventListener("click", searchClick);

function showEvent(e) {
  window.location.href = `/event/${e}`;
}

function searchClick() {
  var searchText = inputVar.value;
  console.log(searchText, "Search");
  fetch(`/api/search/${searchText}`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        const eventObj = results[i];
        const [endDate, timeEnd] = eventObj.event_end.split("T");
        const [startDate, timeStart] = eventObj.event_start.split("T");
        const eventHtml = `<div onclick="showEvent(${eventObj.id})" class="bg-gray-200 p-4 rounded cursor-pointer">
                        <h2>${eventObj.event_name}</h2>
                        <p id="desc">${eventObj.event_desc}</p>
                        <p>Start: ${startDate} End: ${endDate}</p>
                    </div>`;
        const element = (document.getElementById("searchContainer").innerHTML +=
          eventHtml);
      }
    })
    .catch((error) => {
      console.log("Err", error);
    });
}
