import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularTokenService, UserData } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class ContractorGuard implements CanActivate {

  activate:boolean;

  constructor(private tokenAuthService: AngularTokenService,  private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

      return this.tokenAuthService.currentUserType == 'CONTRACTOR' ? true : this.router.navigate(['']);
  }
  
}
