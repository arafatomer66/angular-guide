import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
   //type defination , prorperty binding with input decorator .(controll the access of a component property)
  @Input('srvElement') element : { name: string , type : string , content : string  } ;

  constructor() { }

  ngOnInit() {
  }

}
