import { SimpleChanges ,  Component, Output, EventEmitter, ViewChild, ElementRef, OnInit , OnChanges } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit , OnChanges  {
  @Output() serverCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  @Output('bpCreated') blueprintCreated = new EventEmitter <{ serverName :string , serverContent : string }> () ;
  // newServerName = '';  dont need this any more for local reference 
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput :ElementRef ;

  constructor() {
    console.log('arfat');
   }



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
  ngOnInit() {
    console.log('ngoninit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    //Called after a bound input property changes


  }
  ngDoCheck(){
    //Called during every change detection run

  }
  ngAfterContentInit(){
    //Called after content (ng-content) has been projected into view

  }
  ngAfterContentChecked(){
    //Called every time the projected content has been checked

  }
  ngAfterViewInit(){
    //Called after the component’s view (and child views) has been initialized
  }
  ngAfterViewChecked(){
    //Called every time the view (and child views) have been checked
  }
  ngOnDestroy(){
   //Called once the component is about to be destroyed
  }

}
