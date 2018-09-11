import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    
  serverId :number = 10 ;
  serverName : string = 'arafatServer' ;
  serverStatus : string = 'offline' ;



  severStatus (){
      return  this.serverStatus ;
  }
  constructor() { 
    this.serverStatus = Math.random()>.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online'? 'green' : 'red'  ;
  }

}
