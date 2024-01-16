import { Init } from 'node:v8';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup
constructor(private api:UserService, private toastr:ToastrService, private router:Router){
   this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
   })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
onSubmit(){
  if(this.loginForm.valid){
    this.api.loginForm().subscribe((res: any)=>{
      const user=res.find((loginUser:any)=>{
        return loginUser.email==this.loginForm.value.email && loginUser.password==this.loginForm.value.password;
      })
      if(user){
        localStorage.setItem("User",JSON.stringify(user));
        this.toastr.success("Successfully Logged In");
        this.loginForm.reset();
        this.router.navigateByUrl('/todo')
      }else
      {
        this.toastr.warning('Invalid Credentials')
      }

    },(err: any)=>{
      alert(err);
    }
     )
  }
}
}
