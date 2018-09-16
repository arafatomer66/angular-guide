import { Component, OnInit, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
   
  @Output() eventCreated = new EventEmitter < { bindName :string } >();
  newBindContent = '' ;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.eventCreated.emit({
      bindName : this.newBindContent 
    });
  }

}
