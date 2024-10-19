import { Component } from '@angular/core';
import { SignUpClientResponseI } from '../../types/signUpClientResponseI';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SignUpClientState } from '../../types/signUpClientState';
import { selectServerSuccess } from '../../store/signUpClientReducer';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from '../../../../share/components/success/success.component';

@Component({
  selector: 'success-transaction-client-c',
  templateUrl: './successTransaction.component.html',
  styleUrl: './successTransaction.component.css',
  standalone: true,
  imports: [SuccessComponent, CommonModule],
})
export class SuccessTransactionClient {
  signUpResponse$: Observable<SignUpClientResponseI | null>;

  constructor(private store: Store<{ state: SignUpClientState }>) {
    this.signUpResponse$ = this.store.select(selectServerSuccess);
  }
}
