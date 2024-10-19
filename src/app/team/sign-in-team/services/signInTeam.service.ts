import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInTeamRequestI } from '../types/signInTeamRequestI';
import { SignInTeamResponseI } from '../types/signInTeamResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingInTeamService {
  apiUrl: String = environment.backendUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInTeamRequestI): Observable<SignInTeamResponseI> {
    return this.httpClient.post<SignInTeamResponseI>(
      `${this.apiUrl}/team/api/v1/sign-in`,
      request
    );
  }
}
