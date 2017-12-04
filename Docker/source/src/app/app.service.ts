import {Injectable} from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {LoginDetails} from './loginDetails';

@Injectable()
export class AppService {
  constructor(private http : Http){
  }

  //Fetch all articles
    getAllDetails(): Observable<LoginDetails[]> {
        return this.http.get("/api/getLoginDetails")
         .map(this.extractData);

    }

 private extractData(res: Response) {
  let body = res.json();
  return body;
    }

  private handleError (error: Response) {
  console.error(error || error);
  return Observable.throw(error.status);
    }

}
