import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SizeCheckfordesktop implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            if(window.innerWidth > 1024) {
               return true;
            }
           else {
               return false;
           }
        } catch (e) {
            console.log(e);
        }
    }
}