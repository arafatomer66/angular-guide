import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Api } from './api.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface ApiResult<T> {
  data: T[],
  error: string,
  success: string,
  count: number,
  actions: any[],
  tools: any[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "------";

  constructor(private http : Http) { 

   }

   getData(): Observable<ApiResult<Api>> {
    return this.http.post(this.apiURL, { page: 1, limit: 20 })
      .pipe(
        map((response: Response) => {

          const result: ApiResult<Api> = <ApiResult<Api>>response.json();
          console.log(result);
          return result;

          ;
        }))

  }
}
