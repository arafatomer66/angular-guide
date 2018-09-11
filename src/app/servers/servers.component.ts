import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer : boolean = false ;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowServer = true ;
    }, 2000);
  }

}
