import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Http } from '@angular/http';
import {fromPromise} from 'rxjs/internal/Observable/fromPromise'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.
      get("/assets/data/userData.json").pipe(
        map(res => res.json()),
        catchError(error => of('getUsers error:'+ error))
      );
  }
}
