import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer : boolean = false ;
  onServerCreate : string = "No server created !" ;
  serverName = '' ;
  serverCreated :boolean = false ;

  onServerCreated(){ 
    this.serverCreated = true ;
    this.onServerCreate = "Server Created , And Server Name is :" + this.serverName ;
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowServer = true ;
    }, 2000);
  }
  onUpdateServerName( event : Event ){
    
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
