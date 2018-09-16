import { Component, OnInit, EventEmitter ,Output, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
   
  @Output() eventCreated = new EventEmitter < { bindName :string } >();
  // newBindContent = '' ;
  @ViewChild('bindNameInput') bindNameInput : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.eventCreated.emit({
      bindName : this.bindNameInput.nativeElement.value
    });
  }

}
