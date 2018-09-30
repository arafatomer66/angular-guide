import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f') signupform : NgForm ;
  answer :any = '' ;

  defaultQuestion = 'pet' ;
  genders = ['Male' ,'Female'] ;

  user = {
     username : '',
     email : '' ,
     question : '',
     qAnswer : '',
     gender : ''
  };

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue(
    //   {
    //       userData : {
    //       username : suggestedName ,
    //       email : 'arafatomer66@gmail.com'

    //   },
    //   secret : '' ,
    //   questionAnswer : '',
    //   gender : 'Male'
    //   }
    // )

    this.signupform.form.patchValue(
          {
                  userData : 
                  {
                    
                  username : suggestedName ,
       
                  }, 
          }
    );
      
  }

  submitted = false ;

  // onSubmit(forms : NgForm){
  //   console.log(forms.value.email);
  // }


  // onSubmit(){
  //  if(this.signupform.valid == false){
  //    alert("Not valid");
  //  }
  //  console.log('valid');
  //  console.log(this.signupform);
  // }

  onSubmit(){
    console.log(this.signupform);
    this.submitted = true ;
    this.user.username = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.question = this.signupform.value.secret;
    this.user.qAnswer = this.signupform.value.questionAnswer;
    this.user.gender = this.signupform.value.gender;

    this.signupform.reset();
  }



}
