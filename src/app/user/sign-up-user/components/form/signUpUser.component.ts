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
import { SignUpUserState } from '../../types/signUpUserState';
import { SignUpUserRequestI } from '../../types/signUpUserRequestI';

import { Observable, combineLatest } from 'rxjs';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectServerError,
} from '../../store/signUpUserReducer';
import { SeverErrorComponent } from '../../../../share/components/serverError/serverError.component';
import { LoaderComponent } from '../../../../share/components/loader/loader.component';
import { ServerErrorI } from '../../../../share/types/ServerErrorI';
import { signUpUserActions } from '../../store/signUpUserActions';

@Component({
  selector: 'sign-up-form-client-c',
  templateUrl: './signUpUser.component.html',
  styleUrls: ['./signUpUser.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SeverErrorComponent,
    LoaderComponent,
  ],
})
export class SignUpUserComponent {
  data$: Observable<{
    isSubmitting$: boolean;
    isLoading$: boolean;
    serverError$: ServerErrorI | null;
  }>;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[0-9]*$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      cPassword: new FormControl('', [Validators.required]),
      nit: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[0-9]*$'),
      ]),
    },
    { validators: this.isMatchOnPasswords }
  );

  constructor(private store: Store<{ state: SignUpUserState }>) {
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

  goBack(): void {
    window.history.back(); // Esto llevará al usuario a la página anterior en el historial
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const request: SignUpUserRequestI = {
      name: this.form.controls.name.value ?? '',
      email: this.form.controls.email.value ?? '',
      id: Number(this.form.controls.id.value),
      password: this.form.controls.password.value ?? '',
      client_nit: Number(this.form.controls.nit.value),
    };
    this.store.dispatch(signUpUserActions.signUp({ request }));
  }

  get name() {
    return this.form.get('name');
  }

  get id() {
    return this.form.get('id');
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

  get nit() {
    return this.form.get('nit');
  }
}
