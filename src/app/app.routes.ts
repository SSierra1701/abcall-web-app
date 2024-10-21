import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sign/config/signIn.routes').then((r) => r.signInRoutes),
  },
  {
    path: 'sign-up/user',
    loadChildren: () =>
      import('./user/sign-up-user/config/signUpUser.routes').then(
        (r) => r.signUpUser
      ),
  },
  {
    path: 'sign-up/client',
    loadChildren: () =>
      import('./client/sign-up-client/config/signUpClient.routes').then(
        (r) => r.signUpClient
      ),
  },
  {
    path: 'home-client',
    loadChildren: () =>
      import('./client/home-client/config/homeClient.routers').then(
        (r) => r.clientHomeRouters
      ),
  },
  {
    path: 'home-user',
    loadChildren: () =>
      import('./user/home-user/config/homeUser.routes').then(
        (r) => r.userHomeRouters
      ),
  },
  {
    path: 'home-team',
    loadChildren: () =>
      import('./team/home-team/config/homeTeam.routes').then(
        (r) => r.teamHomeRouters
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/sign-in-admin/config/sign-in-admin.routes').then(
        (r) => r.signInAdminRoute
      ),
  },
  {
    path: 'home-admin',
    loadChildren: () =>
      import('./admin/home-admin/config/homeAdmin.routes').then(
        (r) => r.adminHomeRouters
      ),
  },
];
