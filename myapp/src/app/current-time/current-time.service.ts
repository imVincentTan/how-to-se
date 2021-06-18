import { Injectable } from '@angular/core';
// http
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface CurrentTime {
  datetime: string;
  timezone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {

  private timeUrl = 'http://worldtimeapi.org/api/ip';

  constructor(private http: HttpClient) { }

  getTime() {
    return this.http.get<CurrentTime>(this.timeUrl)
  }

  private handleError (error: HttpErrorResponse){
    console.error();
  }
}
