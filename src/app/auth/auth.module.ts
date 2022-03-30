import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginGuimariosComponent } from './login-guimarios/login-guimarios.component';
import { RegisterComponent } from './register/register.component';


@NgModule ({
  imports: [
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [LoginGuimariosComponent, RegisterComponent],
  exports: [],
  providers: [

  ]
})
export class AuthModule {

}
