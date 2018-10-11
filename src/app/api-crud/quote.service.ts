import { Injectable } from '@angular/core';
import { Http, Response , Headers } from '@angular/http';
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
 updateQuote(id : number , newContent : string){
   const body = JSON.stringify({content : newContent});
   const headers =  new Headers({ 'Content-Type' : 'application/json'});
   return this.http.put('http://localhost:8000/api/quote/'+id , body , { headers : headers }).pipe(
     map(
       (response : Response) => response.json()
     )
   );
 }


}
