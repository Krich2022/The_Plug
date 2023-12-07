
var searchVar= document.getElementById('searchButton');
var inputVar= document.getElementById('inputField');

searchVar.addEventListener("click", searchClick);

function searchClick(){   
    var searchText= inputVar.value;
    console.log(searchText,"Search")
   fetch(`/api/search/${searchText}`)
   .then(response => response.json())
   .then(results => {
    console.log("API result",results)
   }).catch(error=> {
    console.log("Err",error)
   })
    
}

 