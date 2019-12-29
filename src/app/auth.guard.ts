import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { UserInterface } from './interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canAccess();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canAccess();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.canAccess();
  }

  public canAccess(): Observable<boolean> | boolean {
    if (this.authService.user && this.authService.user.id) {
      return true;
    }

    return this.authService.getLoggedInUser().pipe(
      map(
        (user: any) => {
          console.log(user);
          if (user.data && user.data.id) {
            this.authService.setUser(user['data'])
            return true;
          }
          this.router.navigateByUrl('/login');
          return false;
        },
        (error) => {
          this.router.navigateByUrl('/login');
          return false;
        }
      ),
      catchError((err, caught) => {
        this.router.navigateByUrl('/login');
        return empty();
      })
    );
  }
}
