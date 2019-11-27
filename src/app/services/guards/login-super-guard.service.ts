import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSuperGuardService {
  
  isLoggedIn: boolean = false;
  
  constructor(private router:Router) {
    console.log('LoginSuperGuardService constructor start');
  
    this.router.events.subscribe(routerEvent =>{
      if (routerEvent instanceof NavigationEnd){
        console.log('routerEvent, isLoggedIn: ', this.isLoggedIn, 'url: ', this.router.url);
        
        if (this.router.url.includes('login') == false) {
          if (this.isLoggedIn == false) {
            this.router.navigateByUrl('/login')
          }
        }
      }
    })
  }

}
