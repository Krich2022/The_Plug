const pathArr = window.location.pathname.split("/");
const eventId = pathArr[pathArr.length - 1];
const getEvent = async () => {
  const event = await fetch(`/api/events/event-by-id/${eventId}`, {
    method: "GET",
  });
  const rsvp = await fetch(`/api/rsvp/users-by-event-id/${eventId}`, {
    method: "GET",
  });
  const eventData = await event.json();
  const rsvpData = await rsvp.json();
  const currentUserId = sessionStorage.getItem("user_id");
  console.log(eventData.created_by);
  console.log(currentUserId);
  if (eventData.created_by == currentUserId) {
    document.getElementById(
      "emailContainer"
    ).innerHTML = `<button id="emailRsvp" class="boxbg rounded-corners m-2 p-10 object-fill">Email RSVP</button>`;
    const submitEmail = document.getElementById("emailRsvp");
    submitEmail.addEventListener("click", emailUsers);
  } else {
    document.getElementById(
      "emailContainer"
    ).innerHTML = `<button id="rsvpToEvent" class="boxbg rounded-corners m-2 p-10 object-fill">RSVP to Event</button>`;
    const submitEmail = document.getElementById("rsvpToEvent");
    submitEmail.addEventListener("click", rsvpToEvent);
  }

  const [endDate, timeEnd] = eventData.event_end.split("T");
  const [startDate, timeStart] = eventData.event_start.split("T");
  document.getElementById("title").innerHTML = eventData.event_name;
  document.getElementById("location").innerHTML = eventData.event_location;
  document.getElementById(
    "date&Time"
  ).innerHTML = `Start: ${startDate} End: ${endDate}`;
  document.getElementById("description").innerHTML = eventData.event_desc;
  const eventUsers = [];
  for (let i = 0; i < rsvpData.length; i++) {
    const name = rsvpData[i].user.name;
    eventUsers.push(name);
  }
  document.getElementById("rsvp").textContent = eventUsers.join(", ");
};

const emailUsers = async () => {
  try {
    const event = await fetch(`/api/events/event-by-id/${eventId}`, {
      method: "GET",
    });
    const rsvp = await fetch(`/api/rsvp/users-by-event-id/${eventId}`, {
      method: "GET",
    });

    const rsvpData = await rsvp.json();
    const eventData = await event.json();
    const [endDate, timeEnd] = eventData.event_end.split("T");
    const [startDate, timeStart] = eventData.event_start.split("T");

    const emailEvent = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "",
        eventName: eventData.event_name,
        eventStart: startDate,
        eventEnd: endDate,
        eventUrl: window.location.pathname,
      }),
    });
    if (emailEvent.ok) {
      console.log("Message Sent");
    } else {
      console.error("Error triggering email campaign:", emailEvent.statusText);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

const rsvpToEvent = async () => {
  try {
    const response = await fetch(`/api/rsvp/${eventId}`, {
      method: "POST",
    });

    if (response.ok) {
      console.log("RSVP successful");
    } else {
      console.error("RSVP failed");
    }
  } catch (error) {
    console.error("Error during RSVP:", error);
  }
};

getEvent();
