import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(
    private httpClient: HttpClient
    ) { }

  login(sid: string, password: string): Observable<any>{
    //locahost:3000/sigin/{sid}/{password}/
    return this.httpClient.get(AUTH_API + '/users?sid=' + sid + '&password=' + password);
  }

}
