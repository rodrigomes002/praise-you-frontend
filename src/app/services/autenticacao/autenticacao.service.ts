import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post('https://localhost:5001/api/ApiAutoriza/login', {
      email: email,
      password: senha
    });
  }
}
