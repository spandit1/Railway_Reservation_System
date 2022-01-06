import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../user-profile';
import { UserService } from '../user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserProfile=new UserProfile();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data => console.log(data));
    this.goToUserList();
  }
  goToUserList(){
    this.router.navigate(['/register']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
