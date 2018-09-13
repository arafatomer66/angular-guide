import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  @Output() serverCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  @Output('bpCreated') blueprintCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  // newServerName = '';  dont need this any more for local reference 
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput :ElementRef ;

  constructor() { }



  onAddServer(nameInput : HTMLInputElement) {
 
    this.serverCreated.emit({
      serverName : nameInput.value ,
      serverContent : this.serverContentInput.nativeElement.value
    });
 
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName : nameInput.value ,
      serverContent : this.serverContentInput.nativeElement.value
    });
  

}
}
