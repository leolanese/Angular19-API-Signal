import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',  // home route
    renderMode: RenderMode.Server, // Render the component on the server
  },
  {
    path: 'users',
    renderMode: RenderMode.Server, // UserComponent is rendered on the server when users visit the '/users' route, and the data is fetched during this server-side rendering process.
  },
  {
    path: '**',
    renderMode: RenderMode.Client, // Render the component on the client
  }
];
