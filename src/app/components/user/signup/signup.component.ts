import { Component, OnInit } from '@angular/core';
import { Init } from 'node:v8';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass'
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor(private api:UserService, private toastr:ToastrService, private router:Router){
     this.signupForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(11)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
     })
  }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  onSubmit(){
    if(this.signupForm.valid){
      this.api.SignUpUser(this.signupForm.value).subscribe((res: any)=>{
        this.toastr.success("Successfully Sign Up");
        this.signupForm.reset();
        this.router.navigateByUrl('/login')
              })
      },(err: any)=>{
        alert(err);
      }
    }
    }