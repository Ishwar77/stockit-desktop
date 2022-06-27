import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SizeCheck implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(window.innerWidth);
        try {
            if(window.innerWidth < 1024) {
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