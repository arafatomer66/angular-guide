import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f') signupform : NgForm ;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(forms : NgForm){
  //   console.log(forms.value.email);
  // }


  onSubmit(){
     console.log(this.signupform
      ) ;
  }

}
