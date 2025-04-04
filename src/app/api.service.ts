import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  // Signal to store the selected user
  private selectedUserSignal = signal<any>(null);

  // postId = signal(1);
  // post = httpResource<any>(() => `${this.baseUrl}/posts/${this.postId()}`)
  // user = httpResource<any>(() => `${this.baseUrl}/users/${this.post.value()?.userId}`)
  // comments = httpResource<any>(() => `${this.baseUrl}/comments?postId=${this.post.value()?.userId}`)

  // Using httpResource() with Parameters
  private itemsResource = httpResource<any>(() => ({
    url: `${this.baseUrl}/users`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
    defaultValue: { item: 'empty'}
  }));

  // Computed signals for the template
  isLoading = this.itemsResource.isLoading;
  items = computed(() => this.itemsResource.value() ?? []);
  isError = computed(() => this.itemsResource.error() as HttpErrorResponse);

    // Method to update the selected user
  setSelectedUser(user: any): void {
    this.selectedUserSignal.set(user);
    console.log('User selected in service:', user);
  }
} 

