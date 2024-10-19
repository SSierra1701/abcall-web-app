import { Route } from '@angular/router';
import { SignInAdminFormComponent } from '../components/form/sign-in-form.component';

export const signInAdminRoute: Route[] = [
  {
    path: '',
    component: SignInAdminFormComponent,
  },
];
