import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from './../api.service';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'app-user',
  imports: [UserCardComponent, JsonPipe],
  template: `
    @if (isLoading()) {
      <p>Loading...</p>
    } @else if (isError()){
        <div style='color: red'>An error occurred: {{ isError() | json }}</div>
    } @else {
      @if (items().length) {
        <section class="card-container">
          @for (item of items(); track item) {
            <app-user-card [user]="item" />
          }
        </section>
      } @else {
        <div>No elements found</div>
      }
   }

  <pre>post: {{ post.value() | json }}</pre>
  <pre>user: {{ user.value() | json }}</pre>
  <pre>comments: {{ comments.value() | json }}</pre>    
  `,
})
export class UserComponent {
  private readonly serviceApi = inject(ApiService);
   
  // Signals to support the template
  isError = this.serviceApi.isError;
  isLoading = this.serviceApi.isLoading;
  items = this.serviceApi.items;

  post = this.serviceApi.post;
  user = this.serviceApi.user;
  comments = this.serviceApi.comments;
  
}
