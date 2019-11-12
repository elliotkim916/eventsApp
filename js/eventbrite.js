'use strict';

class Eventbrite {
  constructor() {
    this.token = 'FXOQFMSHQNPNSUSHFQOR';
  }

  async getAllCategories () {
    const call = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token}`);
    const response = await call.json();
    
    return response.categories;
  }

  async searchEvent(query, categoryId) {
    const call = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&sort_by=date&categories=${categoryId}&token=${this.token}`);
    const response = await call.json();

    return response.events;
  }
}