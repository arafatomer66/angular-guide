import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
    return this.http.get('https://ng-recipe-book-866d5.firebaseio.com/data.json') ;
  }

}
