import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { User } from './user';
import { SharedModule } from '../shared/shared.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient, private shared: SharedModule) { }

  getUser(): Observable<User | undefined> {
    const url: string = this.userUrl;
    return this.http.get<User>(url)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        map((user: User) => user),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
