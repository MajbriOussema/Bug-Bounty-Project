import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { LoginService } from '../auth/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: LoginService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    if(this.authService.isLoggedIn()){
      const payload: any = decode(token);
      console.log(payload);
      const currentRole = payload.role;
      if(currentRole===expectedRole){
        return true;
      }
      return false;
    }
    return false;
    
  }
  
}
