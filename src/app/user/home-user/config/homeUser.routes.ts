import { Route } from '@angular/router';
import { HomeUserComponent } from '../components/home/homeUser.component';
import { PqrUserComponent } from '../../pqr/components/pqr-view/pqr-user.component';
import { CreatePqrComponent } from '../../pqr/components/create-pqr/create-pqr.component';

export const userHomeRouters: Route[] = [
  {
    path: '',
    title: 'Home',
    component: HomeUserComponent,
    children: [
      {
        path: 'pqr',
        title: 'Pqr',
        component: PqrUserComponent,
      },
      {
        path: 'create-pqr',
        title: 'Create PQR',
        component: CreatePqrComponent, 
      }
    ],
  },
];
