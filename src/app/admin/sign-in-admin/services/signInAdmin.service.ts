import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInAdminRequestI } from '../types/signInAdminRequestI';
import { SignInAdminResponseI } from '../types/signInAdminResponseI';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingInAdminService {
  apiUrl: String = environment.backendUrl;
  constructor(private httpClient: HttpClient) {}

  signIn(request: SignInAdminRequestI): Observable<SignInAdminResponseI> {
    return this.httpClient.post<SignInAdminResponseI>(
      `${this.apiUrl}/team/api/v1/admin/sign-in`,
      request
    );
  }
}
