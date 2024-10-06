import { Route } from '@angular/router';
import { SignInUserFormComponent } from '../components/form/sign-in-form.component';

export const signInUserRoute: Route[] = [
  {
    path: '',
    component: SignInUserFormComponent,
  },
];
