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
import { SignUpClientState } from '../../types/signUpClientState';
import { SignUpClientRequestI } from '../../types/signUpClientRequestI';

import { Observable, combineLatest } from 'rxjs';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectServerError,
} from '../../store/signUpClientReducer';
import { signUpClientActions } from '../../store/signUpClientActions';
import { SeverErrorComponent } from '../../../../share/components/serverError/serverError.component';
import { LoaderComponent } from '../../../../share/components/loader/loader.component';
import { ServerErrorI } from '../../../../share/types/ServerErrorI';

@Component({
  selector: 'sign-up-form-client-c',
  templateUrl: './signUpClient.component.html',
  styleUrls: ['./signUpClient.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SeverErrorComponent,
    LoaderComponent,
  ],
})
export class SignUpClientComponent {
  data$: Observable<{
    isSubmitting$: boolean;
    isLoading$: boolean;
    serverError$: ServerErrorI | null;
  }>;

  form = new FormGroup(
    {
      nit: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[0-9]*$'),
      ]),
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      cPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.isMatchOnPasswords }
  );

  constructor(private store: Store<{ state: SignUpClientState }>) {
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
    const request: SignUpClientRequestI = {
      nit: Number(this.form.controls.nit.value),
      name: this.form.controls.companyName.value ?? '',
      email: this.form.controls.email.value ?? '',
      password: this.form.controls.password.value ?? '',
    };
    this.store.dispatch(signUpClientActions.signUp({ request }));
  }

  get nit() {
    return this.form.get('nit');
  }

  get companyName() {
    return this.form.get('companyName');
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
