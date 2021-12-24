import { CadastroUsuario } from '../../models/cadastroUsuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: CadastroUsuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/apiautoriza/register`, usuario);
  }
}
