import { Route } from '@angular/router';
import { HomeAdminComponent } from '../components/home/homeAdmin.component';
import { CreateTeamComponent } from '../../create-team/create-team/create-team.component';

export const adminHomeRouters: Route[] = [
  {
    path: '',
    title: 'home',
    component: HomeAdminComponent,
    children: [
      {
        path: 'create-team',
        title: 'New team',
        component: CreateTeamComponent,
      },
    ],
  },
];
