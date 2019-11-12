'use strict';

// instantiate classes
// accessible everywhere
const eventbrite = new Eventbrite();
const ui = new UI();

// declare event listeners
const submitButton = document.querySelector('#submitBtn');
submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  const eventName = document.querySelector('#event-name').value;
  const categoryId = document.querySelector('#category').value;
  
  if (!eventName) {
    ui.printMessage('Please type in an event..', 'text-center alert alert-danger mt-4');
  } else {
    eventbrite.searchEvent(eventName, categoryId)
      .then(events => {
        if (events.length > 0) {
          ui.printEvents(events);
        } else {
          ui.printMessage('No events found..', 'text-center alert alert-danger mt-4');
        }
      });
  }
});