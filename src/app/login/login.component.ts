import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password:String=""
  username:String=""
  reqpwd:String=""

loginForm:FormGroup = new FormGroup({});

constructor(private router: Router, private fb:FormBuilder) { 
  this.loginForm = this.fb.group({
    username :['',Validators.required],
    password:['',Validators.required]
  })

  }


  
  
  checkLogin(){ 
    this.reqpwd= this.loginForm.value.username.slice(0,3)+"123";
    // console.log(this.reqpwd)
    // console.log(this.password)
    if(this.loginForm.value.password == this.reqpwd){
      alert("Login Success")
      this.router.navigate(['user/home']);
    }
    else{
      alert("Invalid Password");
    }
  }


}
