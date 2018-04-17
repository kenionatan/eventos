import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api:string = "https://www.canilps.com.br/teste/";

  constructor(public http: HttpClient) {
  }

  getData(){
      return this.http.get(this.api+'apiRecupera.php');
    }

}
