import { httpResource } from '@angular/common/http';
import { computed, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  // Using httpResource()
  private itemsResource = httpResource<any>(() => ({
    url: `${this.baseUrl}/users`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }));

  // Computed signals for the template
  isLoading = this.itemsResource.isLoading;
  items = computed(() => this.itemsResource.value() ?? []);
} 