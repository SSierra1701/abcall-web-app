import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from '../../../../share/components/success/success.component';
import { SignUpUserResponseI } from '../../../../user/sign-up-user/types/signUpUserResponseI';
import { SignUpUserState } from '../../../../user/sign-up-user/types/signUpUserState';
import { SignUpTeamState } from '../../types/signUpTeamState';
import { selectServerSuccess } from '../../store/signUpTeamReducer';

@Component({
  selector: 'success-sign-up-team-c',
  templateUrl: './success-sign-up.component.html',
  styleUrl: './success-sign-up.component.css',
  standalone: true,
  imports: [SuccessComponent, CommonModule],
})
export class SuccessSignUpTeam {
  signUpResponse$: Observable<SignUpUserResponseI | null>;

  constructor(private store: Store<{ state: SignUpTeamState }>) {
    this.signUpResponse$ = this.store.select(selectServerSuccess);
  }
}
