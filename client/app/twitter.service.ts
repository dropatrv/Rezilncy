import {Injectable} from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TwitterAPIService {
	headers: Headers = null;

  constructor (private http: Http) {}

  searchTweets(query:string): Observable<any[]> {

  	  this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      //this.headers.append('Parameter',  params);


      let options = new RequestOptions({
          method: RequestMethod.Get,
          headers: this.headers,
          search: new URLSearchParams('query='+query)
      });

    return this.http.get("search", options)
                    .map((res:Response) => res.json().statuses)
                    .catch(this.handleError);
  }


   private handleError (error: Response) {
    return Observable.throw(error.json().error);
  }
}
