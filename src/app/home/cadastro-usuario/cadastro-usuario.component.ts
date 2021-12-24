import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from '../../services/home/cadastro-usuario.service';
import { CadastroUsuario } from '../../models/cadastroUsuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastroUsuarioForm = this.formBuilder.group(
      {
        email: [''],
        password: [''],
      }
    )
  }

  cadastrar() {
    const usuario = this.cadastroUsuarioForm.getRawValue() as CadastroUsuario;
    this.cadastroUsuarioService.cadastrar(usuario).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
