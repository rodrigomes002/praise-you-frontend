import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './home/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
    //canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
