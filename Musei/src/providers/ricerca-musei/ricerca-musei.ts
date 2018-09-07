import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RicercaMuseiProvider {

  constructor(public http: Http) {
  }

  //Data un'area ricerca i musei associati
  startRicercaMusei(options) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      this.http.post('http://localhost:3000/api/musei', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log(error);
        });
    });
  }

  //Restituisce i dati del museo selezionato
  getDatiMusei(options) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      this.http.post('http://localhost:3000/api/museo', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log(error);
        });
    });
  }

}
