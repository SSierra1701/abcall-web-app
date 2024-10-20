import { Route } from '@angular/router';
import { SignUpTeamComponent } from '../components/form/signUpTeam.component';
import { SuccessSignUpTeam } from '../components/success-sign-up/success-sign-up.component';

export const signUpTeam: Route[] = [
  {
    path: '',
    component: SignUpTeamComponent,
  },
  {
    path: 'success',
    component: SuccessSignUpTeam,
  },
];
