import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class GameoflifeService {

  private baseUrl:string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:8080/board";
  }

  getScenarios(){
    return this.http.get(this.baseUrl)
                    .map(this.extractListData)
                    .catch(this.handleError);
  }

  private handleError(error: any){
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractListData(res: Response){
    let boards = res.json();
    return boards || [];
  }

  configNewBoard(size:Number, initialAliveCells: String){
    return this.http.post(this.baseUrl+"?size="+size+"&indexes="+initialAliveCells, null)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    return res.json() || {};
  }

  loadBoard(id:String){
    return this.http.get(this.baseUrl+"/"+id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  calcNextGen(id:String){
    return this.http.put(this.baseUrl+"/"+id, null)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteBoard(id:String){
    return this.http.delete(this.baseUrl+"/"+id)
                    .catch(this.handleError);
  }

}
