import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin:any[]
  msg:string;
  showDiv:boolean=false;
  status:string="admin";
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
          this.router.navigate(["/adminhome"]);
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
     
         { "userid": "soumya", "password": "soumya"}]
         
     
  }
 
}