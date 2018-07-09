import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ChatDetailService {

  constructor(private http: Http) { }
}
