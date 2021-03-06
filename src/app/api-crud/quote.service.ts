import { Injectable } from '@angular/core';
import { Http, Response , Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http : Http) { }


  addQuote(content : string){
    const body = JSON.stringify({ content: content });
    const headers =  new Headers({ 'Content-Type' : 'application/json'});
    return this.http.post('http://localhost:8000/api/quote', body , {headers : headers});
  }


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


 deleteQuote(id:number){
  return this.http.delete('http://localhost:8000/api/quote/'+id ); 
 }

//update method with httpclient and object.keys 
//  updateData(data: any): Observable<any> {
//     let urlBuilder = 'http://192.168.0.10:88/OvertimeInsert';
//     Object.keys(data).map(key => urlBuilder += `/${data[key]}`);

//     return this.httpClient.get(urlBuilder);

//   }

//insert data
// sendData(data: any): Observable<any> {

//   let urlBuilder = 'http://192.168.0.10:88/OvertimeInsert/0';
//   Object.keys(data).map(key => urlBuilder += `/${data[key]}`);

//   return this.httpClient.get(urlBuilder);
// }

//get data
// getOvertimeList(): Observable<Overtime[]> {
//   return this.httpClient.get<Overtime[]>(this.overtimeListUrl);
// }


}
