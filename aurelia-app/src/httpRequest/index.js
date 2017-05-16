import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Index {
  constructor(client) {
    this.isLoading = true;
    this.client = client;
  }

  async activate() {
    const response = await this.client.get('package.json');
    this.data = response.response;
    this.isLoading = false;
  }
}
