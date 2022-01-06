import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string){
    return this.http.post("http://localhost:8090/user/authenticate", {username: username, password: password})
    .subscribe(
      (userData: any)=> {
        console.log(userData);
        sessionStorage.setItem('username', username);
        let token= "Bearer "+userData.jwt;
        sessionStorage.setItem('token', token);
        console.log(token);
         sessionStorage.setItem('id', userData.id);
         sessionStorage.setItem('name', userData.name);
        this.router.navigate(['/dealer-signedin']);
      }
    );
  }

  register(user: UserProfile){
    return this.http.post("http://localhost:8090/user/register", user);
  }

  isLoggedIn(){
    let user= sessionStorage.getItem('username');
    console.log("------------"+user);
    console.log(sessionStorage.getItem('token'));
    
    
    return !(user==null);
  }

  logout(){
    sessionStorage.clear();
  }


}