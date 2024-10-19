import { Route } from '@angular/router';
import { SignInClientFormComponent } from '../components/form/sign-in-form.component';

export const signInClientRoute: Route[] = [
  {
    path: '',
    component: SignInClientFormComponent,
  },
];
