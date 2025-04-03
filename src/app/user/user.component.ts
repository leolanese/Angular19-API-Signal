import { Component, inject } from '@angular/core';
import { ApiService } from './../api.service';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'app-user',
  imports: [UserCardComponent],
  template: `
    <h1>Users</h1>

    @if (isLoading()) {
      <p>Loading...</p>
    } @else if (items().length) {
      <section class="card-container">
        @for (item of items(); track item) {
          <app-user-card [user]="item" />
        }
      </section>
    } @else {
      <div>No elements found</div>
    }
  `,
})
export class UserComponent {
  private serviceApi = inject(ApiService);
   
  // Signals to support the template
  isLoading = this.serviceApi.isLoading;
  items = this.serviceApi.items;
}
