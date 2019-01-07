import { Injectable } from '@angular/core';
import { Cafe } from './cafe';
import { CAFES } from './mock-cafes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(
    private http: HttpClient
  ) { }

  private cafesUrl = 'http://kahvilapi.azurewebsites.net/api/values';

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.cafesUrl)
    .pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  getCafe(id: number): Observable<Cafe> {
    const url = `${this.cafesUrl}/${id}`;
    return this.http.get<Cafe>(url).pipe(
      catchError(this.handleError<Cafe>(`getCafe id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
