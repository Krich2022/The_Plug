const getEvent = async () => {
  const pathArr = window.location.pathname.split("/");
  const eventId = pathArr[pathArr.length - 1];
  const event = await fetch(`/api/events/event-by-id/${eventId}`, {
    method: "GET",
  });
  const eventData = await event.json();
  const currentUserId = sessionStorage.getItem("user_id");
  if (eventData.created_by === currentUserId) {
  }
};
getEvent();
