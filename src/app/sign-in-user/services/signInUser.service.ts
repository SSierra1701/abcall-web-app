import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignInUserRequestI } from '../types/signInUserRequestI';
import { SignInUserResponseI } from '../types/signInUserResponseI';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingInUserService {
  apiUrl: String = environment.userServiceUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInUserRequestI): Observable<SignInUserResponseI> {
    return this.httpClient.post<SignInUserResponseI>(
      `${this.apiUrl}/api/v1/sign-in`,
      request
    );
  }
}
