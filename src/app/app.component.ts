import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header>Angular 19+</header>

    <main>
      <router-outlet />
    </main>

    <footer>footer</footer>
  `,
})
export class AppComponent {}
