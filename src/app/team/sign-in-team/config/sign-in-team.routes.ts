import { Route } from '@angular/router';
import { SignInTeamFormComponent } from '../components/form/sign-in-form.component';

export const signInTeamRoute: Route[] = [
  {
    path: '',
    component: SignInTeamFormComponent,
  },
];
