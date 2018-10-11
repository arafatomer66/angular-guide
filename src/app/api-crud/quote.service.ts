import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http : Http) { }


  getQuotes() :Observable<any> {
    return this.http.get('http://localhost:8000/api/quotes').pipe(
      map(
        (response : Response) => {
        return response.json().quotes;
        }
      )
    )
    
    ;
  }
}
