import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(public userService: UserService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setStorage("token", data.token);
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {
  }

}
