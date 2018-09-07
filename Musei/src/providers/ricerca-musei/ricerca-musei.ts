import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RicercaMuseiProvider {

  constructor(public http: Http) {
  }

  getRicercaMusei(options) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      this.http.post('http://localhost:8079/api/musei', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log(error);
        });
    });
  }

}
