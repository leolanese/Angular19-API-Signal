import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // UserComponent isloaded lazily
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent)
  },
  {   path: '**', redirectTo: 'home', pathMatch: 'full' },
]; 