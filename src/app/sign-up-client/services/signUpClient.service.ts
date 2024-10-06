import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpClientRequestI } from '../types/signUpClientRequestI';
import { SignUpClientResponseI } from '../types/signUpClientResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpClientService {
  apiUrl: string = environment.clientServiceUrl;

  constructor(private httpClient: HttpClient) {}

  signUp(request: SignUpClientRequestI): Observable<SignUpClientResponseI> {
    return this.httpClient
      .post<SignUpClientResponseI>(`${this.apiUrl}/api/v1/sign-up`, request)
      .pipe(map((response) => response));
  }
}
