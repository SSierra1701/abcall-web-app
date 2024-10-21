import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeverErrorComponent } from '../../../../share/components/serverError/serverError.component';
import { LoaderComponent } from '../../../../share/components/loader/loader.component';
import { Observable, combineLatest } from 'rxjs';
import { ServerErrorI } from '../../../../share/types/ServerErrorI';
import { SignInClientStateI } from '../../types/signInClientStateI';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectServerError,
} from '../../store/signInClientReducer';
import { SignInClientRequestI } from '../../types/signInClientRequestI';
import { signInClientActions } from '../../store/signInClientActions';

@Component({
  selector: 'sign-in-form-client-c',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SeverErrorComponent,
    LoaderComponent,
  ],
})
export class SignInClientFormComponent {
  data$: Observable<{
    isSubmitting$: boolean;
    isLoading$: boolean;
    serverError$: ServerErrorI | null;
  }>;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private store: Store<{ state: SignInClientStateI }>) {
    this.data$ = combineLatest({
      isSubmitting$: this.store.select(selectIsSubmitting),
      isLoading$: this.store.select(selectIsLoading),
      serverError$: this.store.select(selectServerError),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const request: SignInClientRequestI = {
      email: this.form.controls.email.value ?? '',
      password: this.form.controls.password.value ?? '',
    };
    this.store.dispatch(signInClientActions.signIn({ request }));
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
