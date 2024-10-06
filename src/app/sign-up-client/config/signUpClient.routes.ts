import { Route } from '@angular/router';
import { SignUpClientComponent } from '../components/form/signUpClient.component';
import { SuccessTransactionClient } from '../components/success-transaction/successTransaction.component';

export const signUpClient: Route[] = [
  {
    path: '',
    component: SignUpClientComponent,
  },
  {
    path: 'success',
    component: SuccessTransactionClient,
  },
];
