import { Route } from '@angular/router';
import { HomeUserComponent } from '../components/home/homeUser.component';
import { PqrUserComponent } from '../../pqr/components/pqr-view/pqr-user.component';

export const userHomeRouters: Route[] = [
  {
    path: '',
    title: 'home',
    component: HomeUserComponent,
    children: [
      {
        path: 'pqr',
        title: 'pqr',
        component: PqrUserComponent,
      },
    ],
  },
];
