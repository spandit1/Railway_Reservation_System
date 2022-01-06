import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:any[]
  msg:string;
  showDiv:boolean=false;
  status:string="user";
  constructor(private router:Router) { }
  submitLoginForm(form: NgForm) {
 
    for( var value of this.admin)
    {
      this.showDiv=(form.value.userid==value.userid)&&(form.value.password==value.password)
     
      if( this.showDiv)
        {
          console.log("Success");
          this.msg="success";
          sessionStorage.setItem('userName',form.value.userid)
          sessionStorage.setItem('userRole',this.status)
          this.router.navigate(["/train"]);
        }
      else
          {
            console.log("failed");
            this.msg="enter valid credintials";
           
          }
    }
 
 
  }
  ngOnInit(): void {
    this.admin=[
     
         { "userid": "user", "password": "user"}]
         
     
  }
 
}
