import { Component, OnInit , OnDestroy  } from '@angular/core';
import { interval, Observer, Observable, Subscription } from "rxjs";
import 'rxjs/Rx' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customSub : Subscription ;
  numberSub : Subscription ;
  constructor() { }

  ngOnInit() {
       const myNumbers = interval(1000);
      //  .map(()=>
      //  {

      //  });
      this.numberSub = myNumbers.subscribe(
       (number : number) => 
       {


         console.log(number);
       }
     );

     const myObservables = Observable.create((observer : Observer<string>) => {
        setTimeout(()=> observer.next('First package'),2000);
        setTimeout(()=> observer.next('second package'),4000);
        setTimeout(()=> observer.error('error package'),6000);
        setTimeout(()=> observer.complete(),6000);
    });
     this.customSub =  myObservables.subscribe(
      (data :string) => {
        console.log(data);
      },
      (error :string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      },
    );
  }

  ngOnDestry(){
    this.customSub.unsubscribe();
    this.numberSub.unsubscribe();
  }

}
