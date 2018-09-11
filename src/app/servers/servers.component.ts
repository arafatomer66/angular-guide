import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer : boolean = false ;
  onServerCreate : string = "No server created !" ;

  onServerCreated(){
    this.onServerCreate = "Server Created !" ;
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowServer = true ;
    }, 2000);
  }

}
