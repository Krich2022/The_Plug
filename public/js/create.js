const event = document.getElementById("event");
const eventdate = document.getElementById("eventdate");
const eventLocation = document.getElementById("location");
const description = document.getElementById("description");
const eventButton = document.getElementById("eventSubmit");

const createEvent = async (event, eventdate, eventLocation, description) => {
  const response = await fetch("/api/events", {
    method: "POST",
    body: JSON.stringify({ event, eventdate, eventLocation, description }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create event");
  }
};

eventButton.addEventListener("click", (e) => {
  e.preventDefault();
  createEvent(
    event.value,
    eventdate.value,
    eventLocation.value,
    description.value
  );
});
