import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { MainComponent } from './pages/main/main.component';

const router:Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'registrar', component:RegistrarComponent},
      {path:'**', redirectTo:'login'}
    ] 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }