import {Injectable} from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoginDetails} from './loginDetails';

@Injectable()
export class AppService {
  constructor(private http : Http){
  }

  //Fetch all articles
    getAllDetails(): Observable<LoginDetails[]> {
        return this.http.get("/api/getLoginDetails")
         .map(this.extractData)
         .catch(this.handleError);
    }

  //Welcome message
    getWelcomeMessage() : Observable<string> {
        return this.http.get("/api")
        .map(message => message)
        .catch(this.handleError);
    }

 private extractData(res: Response) {
  let body = res;
  return body;
    }

  private handleError (error: Response) {
  console.error(error || error);
  return Observable.throw(error.status);
    }

}
