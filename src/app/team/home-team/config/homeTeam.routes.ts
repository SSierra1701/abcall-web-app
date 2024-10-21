import { Route } from '@angular/router';
import { HomeTeamComponent } from '../components/home/homeTeam.component';
import { ResolvePqrComponent } from '../../resolve-pqr/components/main/resolve-pqr.component';

export const teamHomeRouters: Route[] = [
  {
    path: '',
    title: 'home',
    component: HomeTeamComponent,
    children: [
      {
        path: 'resolve-pqr',
        title: 'Resolve pqr',
        component: ResolvePqrComponent,
      },
    ],
  },
];
