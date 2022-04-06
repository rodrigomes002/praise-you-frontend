import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  logar(usuario: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/autoriza/login`, usuario);
  }
}
