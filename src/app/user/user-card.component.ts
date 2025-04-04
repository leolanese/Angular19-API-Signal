import { Component, inject, input, output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-card',
  template: `
    <article class="card" (click)="userSelected.emit(user())"  (click)="onCardClick()">
      <div class="card-content">
        <h3>{{ user().name }}</h3>
        <p class="username">{{ user().username }}</p>
        <p class="email">{{ user().email }}</p>
        <p class="address">{{ user().address.street }}, {{ user().address.city }}</p>
        <p class="company">{{ user().company.name }}</p>
      </div>
    </article>
  `,
  styles: `
    .card-content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    p {
      color: #666;
      font-size: .9rem;
      color: #444;
    }
  `
})
export class UserCardComponent {
  // Input signal that replace: @Input() user!: User;
  readonly user = input<any>();
  // Output signal that replace: @Output() userSelected = new EventEmitter<any>();
  readonly userSelected = output<any>();

  private readonly serviceApi = inject(ApiService);

  onCardClick(): void {
    this.serviceApi.setSelectedUser(this.user());
  }
}
