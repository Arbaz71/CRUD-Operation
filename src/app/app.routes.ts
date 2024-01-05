import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/others/notfound/notfound.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { NetworkerrorComponent } from './components/others/networkerror/networkerror.component';

export const routes: Routes = [
    { path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'**',component:LoginComponent},
    {path:'todo',component:TodolistComponent},
    {path:'signup',component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'network-error', component:NetworkerrorComponent}
];
