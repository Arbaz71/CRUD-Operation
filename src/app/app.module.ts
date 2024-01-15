import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import {AppRoutingModule} from "./app-routing.module;"
import { AppComponent } from "./app.component";
import { NetworkerrorComponent } from "./components/others/networkerror/networkerror.component";
import { TodoformComponent } from "./components/todo/todoform/todoform.component";
import { TodoitemsComponent } from "./components/todo/todoitems/todoitems.component";
import { LoginComponent } from "./components/user/login/login.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { NotfoundComponent } from "./components/others/notfound/notfound.component";
import { TodolistComponent } from "./components/todo/todolist/todolist.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ToastrModule} from 'ngx-toastr';  
import { Ng2SearchPipe, Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations:[
        AppComponent,
        NetworkerrorComponent,
        NotfoundComponent,
        TodoformComponent,
        TodoitemsComponent,
        TodolistComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        //AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        ToastrModule.forRoot({
        positionClass:'toast-bottom-center',
        closeButton:true,
        progressBar:false,
        preventDuplicates:true,
        })
    ],
    providers:[],
    bootstrap:[AppComponent]
})
