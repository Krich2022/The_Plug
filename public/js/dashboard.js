const getAllEvent = async () => {
    const event = await fetch(/api/events/user-events, {
      method: "GET",
    });
    const rsvp = await fetch(/api/rsvp/rsvp-events, {
      method: "GET",
    });
    const eventData = await event.json();
    const rsvpData = await rsvp.json();
    console.log(eventData);
    console.log(rsvpData);
  
    for (i = 0; i < rsvpData.length; i++) {
      const eventObj = rsvpData[i].event;
      const [endDate, timeEnd] = eventObj.event_end.split("T");
      const [startDate, timeStart] = eventObj.event_start.split("T");
      const eventHtml = <div
          class="bg-gray-200 p-4 rounded cursor-pointer"
          onclick="viewEvent('Event 1', 'January 1, 2023, 12:00 PM', 'Event created by: John Doe')"
        >
          <h2>${eventObj.event_name}</h2>
          <p id="desc">${eventObj.event_desc}</p>
          <p>Start: ${startDate} End: ${endDate}</p>
          <p>Your RSVP event</p>
        </div>;
      document.getElementById("eventsContainer").innerHTML += eventHtml;
    }
  
    for (i = 0; i < eventData.length; i++) {
      const eventObj = eventData[i];
      const eventHtml = <div
          class="bg-gray-200 p-4 rounded cursor-pointer"
          onclick="viewEvent('Event 1', 'January 1, 2023, 12:00 PM', 'Event created by: John Doe')"
        >
          <h2>${eventObj.event_name}</h2>
          <p id="desc">${eventObj.event_desc}</p>
          <p>Start:${startDate} End:${endDate}</p>
          <p>Your event</p>
        </div>;
      document.getElementById("eventsContainer").innerHTML += eventHtml;
    }
  };
  
  getAllEvent();