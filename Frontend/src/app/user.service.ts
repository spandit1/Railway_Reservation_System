import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  FilehttpOptions: any;

  constructor(private httpClient:HttpClient) { }

  

  
  createUser(User:UserProfile):Observable<Object>{
    return this.httpClient.post(`http://localhost:8090/user/register`,User);
  }

 
  getHeaderFileUpload() {
    this.FilehttpOptions =
    new HttpHeaders({
      'Authorization': 'Bearer '+ localStorage.getItem('access_token'),
})
}

}
