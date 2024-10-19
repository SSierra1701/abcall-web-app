import { Route } from '@angular/router';
import { SignInUserFormComponent } from '../components/form/sign-in-form.component';
import { SuccessTransactionUser } from '../../sign-up-user/components/success-transaction/successTransaction.component';

export const signInUserRoute: Route[] = [
  {
    path: '',
    component: SignInUserFormComponent,
  },
  {
    path: 'success',
    component: SuccessTransactionUser,
  },
];
