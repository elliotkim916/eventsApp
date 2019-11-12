'use strict';

class UI {
  constructor() {
    this.init();
  }

  init() {
    this.printCategories(); 
  }

  printCategories() {
    const allCategories = eventbrite.getAllCategories()
      .then(categories => {
        const selectCategory = document.querySelector('#category');
        allCategories.forEach(category => {
          const option = document.createElement('option');
          option.value = category.id;
          option.appendChild(document.createTextNode(category.name));
          selectCategory.appendChild(option);
        });
      }).catch(err => console.warn(err));
  }

  printMessage(message, className) {
    const results = document.querySelector('#search-events');
    const statement = document.createElement('div');
    statement.appendChild(document.createTextNode(message));
    statement.className = className;
    results.appendChild(statement);

    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }

  removeMessage() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }

  printEvents(events) {
    let htmlTemplate = '';
    events.forEach(eventInfo => {
      htmlTemplate += `
        <div class="col-md-4 mt-4">
          <div class="card">
            <div class="card-body">
              <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}"> 
            </div>
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                  <p class="lead text-info">Event Information:</p>
                  <p>${eventInfo.description.text.substring(0, 200)}...</p>
                  <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                  <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>
                  <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
              </div>
              </div>
            </div>
        </div>
      `;

      document.querySelector('#result').innerHTML = htmlTemplate;
    });
  }
}
