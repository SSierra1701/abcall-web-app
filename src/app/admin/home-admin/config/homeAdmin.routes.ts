import { Route } from '@angular/router';
import { HomeAdminComponent } from '../components/home/homeAdmin.component';
import { SignUpTeamComponent } from '../../create-team/components/form/signUpTeam.component';
import { SuccessSignUpTeam } from '../../create-team/components/success-sign-up/success-sign-up.component';

export const adminHomeRouters: Route[] = [
  {
    path: '',
    title: 'home',
    component: HomeAdminComponent,
    children: [
      {
        path: 'create-team',
        title: 'New team',
        component: SignUpTeamComponent,
      },
      {
        path: 'create-team/success',
        title: 'Team created',
        component: SuccessSignUpTeam,
      },
    ],
  },
];
