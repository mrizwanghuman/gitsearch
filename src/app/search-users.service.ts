import { Injectable } from '@angular/core';
import{ Http, Headers, Response } from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchUsersService {
  
constructor(private http:Http){}
private urlGitApi="https://api.github.com/search/users?q=";
searchItFn(palce:string){
let url = this.urlGitApi+palce;
return this.http.get(url).map((res: Response)=> res.json());

}
  

}
