import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.
      get("./assets/data/userData.json").pipe(
        map(res => res.json()),
        catchError(error => of('getUsers error:'+ error))
      );
  }

  getChatDetail(): Observable<any> {
    return this.http.
      get("./assets/data/chatDetail.json").pipe(
        map(res => res.json()),
        catchError(error => of('getChatDetail error:' + error))
      );
  }

  getUserDetail(): Observable<any> {
    return this.http.
      get("./assets/data/userDetail.json").pipe(
        map(res => res.json()),
        catchError(error => of('getChatDetail error:' + error))
      );
  }
}
