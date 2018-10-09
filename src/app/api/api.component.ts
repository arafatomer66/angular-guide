import { Component, OnInit } from '@angular/core';
import { Api } from './api.model';
import { ApiService ,ApiResult } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  api$ ;

  apiBrowser: ApiResult<Api>;

  constructor(private apiService : ApiService) { }

  getDatas(): void {
    this.apiService.getData().subscribe(r => this.apiBrowser = r);
  }

  ngOnInit(): void {
    this.getDatas();
  }

}
