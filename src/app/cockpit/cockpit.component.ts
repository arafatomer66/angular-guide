import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent   {
  @Output() serverCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  @Output('bpCreated') blueprintCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  // newServerName = '';  dont need this any more for local reference 
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput :ElementRef ;

  constructor() { }



  onAddServer(serverNameInput : HTMLInputElement) {
 
    this.serverCreated.emit({
      serverName : serverNameInput.value ,
      serverContent : this.serverContentInput.nativeElement.value
    });
 
  }

  onAddBlueprint(serverNameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName : serverNameInput.value ,
      serverContent : this.serverContentInput.nativeElement.value
    });
  

}

//life cycle hooks
  ngOnInit() {}
  ngOnChange() {}
  ngDoCheck(){}
  ngAfterContentInit(){}
  ngAfterContentChecked(){}
  ngAfterViewInit(){}
  ngAfterViewChecked(){}
  ngOnDestroy(){}

}
