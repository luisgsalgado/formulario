import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautPageComponent } from './pages/layaut-page/layaut-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayautPageComponent,
    children:[
      {path:'login', component: LoginPageComponent},
      {path:'new-account', component: RegisterPageComponent},
      {path:'**', redirectTo: 'login'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
