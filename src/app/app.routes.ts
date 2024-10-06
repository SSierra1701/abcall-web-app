import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sign/config/signIn.routes').then((r) => r.signInRoutes),
  },
  {
    path: 'sign-up/client',
    loadChildren: () =>
      import('./sign-up-client/config/signUpClient.routes').then(
        (r) => r.signUpClient
      ),
  },
  {
    path: 'home-client',
    loadChildren: () =>
      import('./home-client/config/homeClient.routers').then(
        (r) => r.clientHomeRouters
      ),
  },
];
