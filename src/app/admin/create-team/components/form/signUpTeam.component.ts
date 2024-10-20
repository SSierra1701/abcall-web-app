import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUpTeamState } from '../../types/signUpTeamState';
import { SignUpTeamRequestI } from '../../types/signUpTeamRequestI';

import { Observable, combineLatest } from 'rxjs';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectServerError,
} from '../../store/signUpTeamReducer';
import { SeverErrorComponent } from '../../../../share/components/serverError/serverError.component';
import { LoaderComponent } from '../../../../share/components/loader/loader.component';
import { ServerErrorI } from '../../../../share/types/ServerErrorI';
import { signUpTeamActions } from '../../store/signUpTeamActions';

@Component({
  selector: 'sign-up-form-client-c',
  templateUrl: './signUpTeam.component.html',
  styleUrls: ['./signUpTeam.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SeverErrorComponent,
    LoaderComponent,
  ],
})
export class SignUpTeamComponent {
  data$: Observable<{
    isSubmitting$: boolean;
    isLoading$: boolean;
    serverError$: ServerErrorI | null;
  }>;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      cPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.isMatchOnPasswords }
  );

  constructor(private store: Store<{ state: SignUpTeamState }>) {
    this.data$ = combineLatest({
      isSubmitting$: this.store.select(selectIsSubmitting),
      isLoading$: this.store.select(selectIsLoading),
      serverError$: this.store.select(selectServerError),
    });
  }

  isMatchOnPasswords(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value as string;
    const passwordConfirm = control.get('cPassword')?.value as string;
    if (password !== passwordConfirm) {
      return { passwordMatch: true };
    }

    return null;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const request: SignUpTeamRequestI = {
      name: this.form.controls.name.value ?? '',
      email: this.form.controls.email.value ?? '',
      password: this.form.controls.password.value ?? '',
    };
    this.store.dispatch(signUpTeamActions.signUp({ request }));
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get cPassword() {
    return this.form.get('cPassword');
  }
}
