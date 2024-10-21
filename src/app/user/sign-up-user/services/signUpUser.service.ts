import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpUserRequestI } from '../types/signUpUserRequestI';
import { SignUpUserResponseI } from '../types/signUpUserResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpUserService {
  apiUrl: string = environment.backendUrl;

  constructor(private httpClient: HttpClient) {}

  signUp(request: SignUpUserRequestI): Observable<SignUpUserResponseI> {
    return this.httpClient
      .post<SignUpUserResponseI>(`${this.apiUrl}/user/api/v1/sign-up`, request)
      .pipe(map((response) => response));
  }
}
