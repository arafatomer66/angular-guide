import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
     id : this.route.snapshot.params['id'],
     name : this.route.snapshot.params['name']

    };
    this.route.params
    .subscribe(
      (params : Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    )
  }



}


// ActivatedRoute injection gives us the access the values of parameter we passed 
//not forget to import activeroute

//here params is a observables which when the id , name value is changes and updates the url