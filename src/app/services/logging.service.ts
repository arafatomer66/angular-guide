import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor( ) { }

  logStatusChange(status : string){
     console.log('You have changes the server status , new status :' + status);
  }
}
