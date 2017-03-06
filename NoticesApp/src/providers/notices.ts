import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Notices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notices {
  baseUrl: any;

  constructor(public http: Http) {
    this.baseUrl = 'http://localhost:8000/api';
  }

  getNotices(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.baseUrl + '/notices').map(res => res.json());
  }

}
