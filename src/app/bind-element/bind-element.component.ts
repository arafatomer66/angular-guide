import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bind-element',
  templateUrl: './bind-element.component.html',
  styleUrls: ['./bind-element.component.css']
})
export class BindElementComponent implements OnInit {
  @Input('srvElement') element : { name :string } ;
  constructor() { }

  ngOnInit() {
  }

}
