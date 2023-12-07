function addEventToDashboard(eventName, dateTime, createdBy) {
    const eventDashboard = document.getElementById('eventDashboard');

    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card', 'bg-gray-200', 'p-4', 'rounded', 'cursor-pointer');
    eventCard.innerHTML = `
        <h2>${event_name}</h2>
        <p id="desc">${event_desc}</p>
        <p>${event_start}</p>
        <p id="tag">${created_by}</p>
    `;

    eventCard.addEventListener('click', function () {
        viewEvent(eventName, dateTime, createdBy);
    });

    eventDashboard.appendChild(eventCard);
}

function openModal(eventName, dateTime, createdBy) {
    const modalEventName = document.getElementById('modalEventName');
    const modalDateTime = document.getElementById('modalDateTime');
    const modalCreatedBy = document.getElementById('modalCreatedBy');
    modalEventName.textContent = eventName;
    modalDateTime.textContent = dateTime;
    modalCreatedBy.textContent = createdBy;
    const modal = document.getElementById('eventModal');
    modal.style.display = 'block';
}
function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
}

addEventToDashboard('Event 2', 'January 2, 2023, 2:00 PM', 'Event RSVP by: Jane Doe');
addEventToDashboard('Event 3', 'January 3, 2023, 4:00 PM', 'Event created by: Alice Smith');