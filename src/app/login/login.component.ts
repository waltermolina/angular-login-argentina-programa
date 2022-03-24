import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(public userService: UserService, public router: Router) {}


  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);
      //this.userService.setToken(data.token);
      this.userService.setStorage("token", data.token);
      this.userService.setStorage("iduser", data.user.iduser);
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {
  }

}




