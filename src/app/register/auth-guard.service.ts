import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }
  canActivate(snapshot: ActivatedRouteSnapshot,
    router:RouterStateSnapshot):boolean{
if(this.isLoggedIn()){
return true
}

this.router.navigate(["register/logout"])
return false
}

isLoggedIn(){
let status=false
if(localStorage.getItem("isLogged")=="true"){
status=true
}
else{
status=false
}
return status
}
}
