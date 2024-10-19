import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignInClientRequestI } from '../types/signInClientRequestI';
import { SignInClientResponseI } from '../types/signInClientResponseI';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingInClientService {
  apiUrl: String = environment.backendUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInClientRequestI): Observable<SignInClientResponseI> {
    return this.httpClient.post<SignInClientResponseI>(
      `${this.apiUrl}/api/v1/sign-in`,
      request
    );
  }
}
