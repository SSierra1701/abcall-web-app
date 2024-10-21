import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpTeamRequestI } from '../types/signUpTeamRequestI';
import { SignUpTeamResponseI } from '../types/signUpTeamResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpTeamService {
  apiUrl: string = environment.backendUrl;

  constructor(private httpClient: HttpClient) {}

  signUp(
    request: SignUpTeamRequestI,
    token: string
  ): Observable<SignUpTeamResponseI> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: token,
    });
    return this.httpClient
      .post<SignUpTeamResponseI>(
        `${this.apiUrl}/team/api/v1/sign-up`,
        request,
        { headers: httpHeaders }
      )
      .pipe(map((response) => response));
  }
}
