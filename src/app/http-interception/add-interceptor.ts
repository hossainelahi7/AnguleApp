import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor(private shared: SharedModule){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    let clonedRequest;
    if (this.shared.getToken() != null && this.shared.getToken().length > 0) {
      clonedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer ' + this.shared.getToken()) });
    } else {
      clonedRequest = req.clone({ headers: req.headers.append('Authorization', '') });
    }
    return next.handle(clonedRequest);
  }

}
