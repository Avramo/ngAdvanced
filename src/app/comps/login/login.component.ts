import { Component, OnInit, NgModule, Input } from '@angular/core';
import { LoginSuperGuardService } from 'src/app/services/guards/login-super-guard.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() inputUsername: string;
  @Input() inputPassword: string;

 
  constructor(public loginSVC:LoginSuperGuardService,
    private router:Router) { }

  ngOnInit() {
  }
  login(){
    console.log('LoginComponent login()');
    if (this.inputUsername == 'a' && this.inputPassword == '1') {
      this.loginSVC.isLoggedIn = true;
      this.router.navigateByUrl('/chocolate');
    }
    

   
}
}
