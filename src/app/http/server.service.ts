import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : Http) { }

  storeServers(servers : any[]){
    const headers = new Headers({'Content-type' : 'application/json'});
    // return this.http.post('https://ng-recipe-book-866d5.firebaseio.com/data.json' ,
    // servers );
    return this.http.put('https://ng-recipe-book-866d5.firebaseio.com/data.json' ,
    servers )
  }
   
  getServers(){
    return this.http.get('https://ng-recipe-book-866d5.firebaseio.com/data.json').pipe(map(
       (response : Response)=> {
         const data = response.json();
         for(const server of data){
            server.name = 'FETCHED_' + server.name ;
         }
         return data ;
       }
     ) 
    );
  }

}
