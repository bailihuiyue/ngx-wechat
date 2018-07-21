import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MomentsService {

  constructor(private http: Http) { }

  getMoments(): Observable<any> {
    return this.http.
      get("/assets/data/moments.json").pipe(
        map(res => res.json()),
        catchError(error => of('getMoments error:'+ error))
      );
  }
}
