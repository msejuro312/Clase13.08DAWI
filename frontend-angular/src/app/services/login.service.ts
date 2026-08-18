import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) {}

  login(correo: string, clave: string) : Observable<Login> {
    const body = {
      correo: correo,
      clave: clave,
    };
    return this.http.post<Login>(this.apiUrl, body);
  }
}
