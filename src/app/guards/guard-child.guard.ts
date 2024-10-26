import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild,RouterStateSnapshot } from "@angular/router";

/*import { CanActivateFn } from '@angular/router';

export const guardChildGuard: CanActivateFn = (route, state) => {
  return true;
};*/
@Injectable({providedIn: 'root'})

export class GuardChild implements CanActivateChild{
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log("CHILD ROUTE: ", childRoute);
    console.log("CHILD stare: ", state);


    return true;
  }

}