import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService : AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("AUTH INTERCEPTOR WORKS", req);
    const clonedReq =  req.clone({
      params : new HttpParams().set("auth", this.authService.getToken() )
    })
    return next.handle(clonedReq);
  }

  

}
