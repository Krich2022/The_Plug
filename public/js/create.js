const eventName = document.getElementById("eventName");
const eventStart = document.getElementById("eventStart");
const eventEnd = document.getElementById("eventEnd");
const eventLocation = document.getElementById("location");
const description = document.getElementById("description");
const eventButton = document.getElementById("eventSubmit");

const createEvent = async (
  event,
  eventStart,
  eventEnd,
  eventLocation,
  description
) => {
  const response = await fetch("/api/events", {
    method: "POST",
    body: JSON.stringify({
      event_name: event,
      event_start: eventStart,
      event_end: eventEnd,
      event_location: eventLocation,
      event_desc: description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create event");
    console.log(response);
  }
};

eventButton.addEventListener("click", (e) => {
  e.preventDefault();
  const eventStartValue = new Date(eventStart.value);
  const eventEndValue = new Date(eventEnd.value);
  console.log(eventStartValue);
  createEvent(
    eventName.value,
    eventStartValue,
    eventEndValue,
    eventLocation.value,
    description.value
  );
});
