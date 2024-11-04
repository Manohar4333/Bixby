import { Component } from '@angular/core';
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
  constructor(private bs:Router) {}
  
  checkLogin(){ 
    this.reqpwd= this.username.slice(0,3)+"123";
    if(this.password == this.reqpwd){
      this.bs.navigate(['user/home']);
    }
    else{
      alert("Invalid Password");
    }
  }


}
