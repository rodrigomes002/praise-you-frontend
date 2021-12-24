import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuario } from 'src/app/models/cadastroUsuario';
import { LoginService } from 'src/app/services/home/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  logar() {
    const usuario = this.loginForm.getRawValue() as CadastroUsuario;
    this.loginService.logar(usuario).subscribe(
      () => {
        this.router.navigate(['escalas']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
