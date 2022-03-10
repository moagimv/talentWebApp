import { Role } from './../model/Role';
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
export class RoleServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addRole(role: Role): Observable<any>{
    //http://localhost:3000/roles/add/
    return this.httpClient.post( AUTH_API, {role}, httpOptions);
  }

  getOneRole(id: number): Observable<any>{
    //http://localhost:3000/roles/get/{id}/
    return this.httpClient.get(AUTH_API+'/roles?id='+id, httpOptions);
  }

  updateRole(role: Role): Observable<any>{
    //http://localhost:3000/roles/update/
    return this.httpClient.put( AUTH_API, {role}, httpOptions);
  }

  deleteRole(id: number): Observable<any>{
    //http://localhost:3000/roles/delete/{id}/
    return this.httpClient.delete(AUTH_API+'/roles?id='+id, httpOptions)
  }

  getAllRoles(): Observable<any>{
    //http://localhost:3000/roles/users/
    return this.httpClient.get(AUTH_API + '/roles', httpOptions)
  }
}
