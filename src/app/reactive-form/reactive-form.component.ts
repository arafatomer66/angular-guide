import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm : FormGroup ;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl('Md Omer Arafat' , Validators.required),
      'email' : new FormControl('arafatomer66@gmail.com' , [Validators.required , Validators.email]),
      'gender' : new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
