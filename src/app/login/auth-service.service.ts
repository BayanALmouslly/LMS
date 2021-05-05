import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  api=environment.baseUrl+"api/Auth/"
  public auth: Auth = new Auth;
  constructor(public http: HttpClient) {
    this.auth = JSON.parse(localStorage.getItem('login')) as Auth;

  }
  login(account) {
   return this.http.post<any>(this.api,account)
  }
}
