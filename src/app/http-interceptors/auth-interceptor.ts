import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import store from 'store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public authService: AuthService
  ) {
    //
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.authService.apiToken) {
      return next.handle(req);
    }
    let headers = req.headers.set('Authorization', `Bearer ${this.authService.apiToken}`);

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: headers
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}
