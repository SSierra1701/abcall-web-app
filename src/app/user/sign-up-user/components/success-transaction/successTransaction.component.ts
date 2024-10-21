import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from '../../../../share/components/success/success.component';
import { SignUpUserResponseI } from '../../../../user/sign-up-user/types/signUpUserResponseI';
import { SignUpUserState } from '../../../../user/sign-up-user/types/signUpUserState';
import { selectServerSuccess } from '../../store/signUpUserReducer';

@Component({
  selector: 'success-transaction-user-c',
  templateUrl: './successTransaction.component.html',
  styleUrl: './successTransaction.component.css',
  standalone: true,
  imports: [SuccessComponent, CommonModule],
})
export class SuccessTransactionUser {
  signUpResponse$: Observable<SignUpUserResponseI | null>;

  constructor(private store: Store<{ state: SignUpUserState }>) {
    this.signUpResponse$ = this.store.select(selectServerSuccess);
  }
}
