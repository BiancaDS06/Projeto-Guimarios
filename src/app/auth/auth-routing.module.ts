import { LoginGuimariosComponent } from './login-guimarios/login-guimarios.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "login",
    pathMatch: "full",
    component: LoginGuimariosComponent
  },
  {
    path: "register",
    pathMatch: "full",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
