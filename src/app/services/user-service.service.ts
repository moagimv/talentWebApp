import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../model/User';

const AUTH_API = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addUser(user: User): Observable<any>{
    //http://localhost:3000/user/add/
    return this.httpClient.post(AUTH_API + '/users', user);
  }

  getOneUser(id: number): Observable<any>{
    //http://localhost:3000/user/get/{id}/
    return this.httpClient.get(AUTH_API + '/users/' + id);
  }

  updateUser(user: User): Observable<any>{
    //http://localhost:3000/user/update/
    return this.httpClient.put(AUTH_API + '/users/' + user.id, user);
  }

  deleteUser(id: number): Observable<any>{
    //http://localhost:3000/user/delete/{id}/
    return this.httpClient.delete(AUTH_API + '/users/' + id)
  }

  getAllUsers(): Observable<any>{
    //http://localhost:3000/user/users/
    return this.httpClient.get(AUTH_API + '/users')
  }

}
