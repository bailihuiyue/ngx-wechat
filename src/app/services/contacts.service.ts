import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http) { }

  getUContact(): Observable<any> {
    return this.http.
      get("/assets/data/contact.json").pipe(
        map(res => res.json()),
        catchError(error => of('getContact error:' + error))
      );
  }
}
