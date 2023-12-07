const getEvent = async () => {
  const pathArr = window.location.pathname.split("/");
  const eventId = pathArr[pathArr.length - 1];
  const event = await fetch(`/api/events/event-by-id/${eventId}`, {
    method: "GET",
  });
  const rsvp = await fetch(`/api/rsvp/users-by-event-id/${eventId}`, {
    method: "GET",
  });
  const eventData = await event.json();
  const rsvpData = await rsvp.json();
  const currentUserId = sessionStorage.getItem("user_id");
  if (eventData.created_by === currentUserId) {
  }
  // console.log(eventData);
  console.log(rsvpData);

  const [endDate, timeEnd] = eventData.event_end.split("T");
  const [startDate, timeStart] = eventData.event_start.split("T");
  document.getElementById("title").innerHTML = eventData.event_name;
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
getEvent();
