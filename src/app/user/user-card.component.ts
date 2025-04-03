import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <article class="card">
      <div class="card-content">
        <h3>{{ user().name }}</h3>
        <p class="username">Username: {{ user().username }}</p>
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
      gap: 0.5rem;
    }
    .username {
      color: #666;
      font-size: 0.9rem;
    }
    .email {
      color: #673ab7;
      font-size: 0.9rem;
    }
    .address, .company {
      font-size: 0.9rem;
      color: #444;
    }
  `
})
export class UserCardComponent {
  // @Input() user!: User;
  readonly user = input.required<any>();
}
