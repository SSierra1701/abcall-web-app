import { Route } from '@angular/router';
import { SignUpUserComponent } from '../components/form/signUpUser.component';
import { SuccessTransactionUser } from '../components/success-transaction/successTransaction.component';

export const signUpUser: Route[] = [
  {
    path: '',
    component: SignUpUserComponent,
  },
  {
    path: 'success',
    component: SuccessTransactionUser,
  },
];
