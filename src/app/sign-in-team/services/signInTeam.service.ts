import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignInTeamRequestI } from '../types/signInTeamRequestI';
import { SignInTeamResponseI } from '../types/signInTeamResponseI';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingInTeamService {
  apiUrl: String = environment.teamServiceUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInTeamRequestI): Observable<SignInTeamResponseI> {
    return this.httpClient.post<SignInTeamResponseI>(
      `${this.apiUrl}/api/v1/sign-in`,
      request
    );
  }
}
