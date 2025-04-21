import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(name: String, password: String) {
    return this.httpClient
      .post<LoginResponse>('/login', { name, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('token', value.token);
          sessionStorage.setItem('name', value.name);
        })
      );
  }
}
