import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SundayReport provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SundayReports {
  baseUrl: any;
  headers: any;
  options: any;

  constructor(public http: Http) {
    this.baseUrl = 'http://localhost:8000/api';
    this.headers = new Headers();
  }

  getSundayReports(){
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers:this.headers});
    return this.http.get(this.baseUrl + '/reports/sunday', this.options).map(res => res.json());
  }

}
