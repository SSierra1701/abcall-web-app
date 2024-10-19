import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUserRequestI } from '../types/signInUserRequestI';
import { SignInUserResponseI } from '../types/signInUserResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingInUserService {
  apiUrl: String = environment.backendUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInUserRequestI): Observable<SignInUserResponseI> {
    return this.httpClient.post<SignInUserResponseI>(
      `${this.apiUrl}/user/api/v1/sign-in`,
      request
    );
  }
}
