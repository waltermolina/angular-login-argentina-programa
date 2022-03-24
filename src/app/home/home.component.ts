import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  username: string = "desconocido";
  role: number | null = null;

  constructor(public userService: UserService) {
    this.loading = false;
  }

  guardar(value: string){
    console.log("Acá vamos a llamar al método de guardado de la API cuando exista... 🤷🏻‍♀️")
  }

  getUserData() {
    this.loading = true;
    const idUser: string | null = this.userService.getStorage("iduser");
    this.userService.getUserData(Number(idUser)).subscribe(data => {
      console.log(data);
      this.username = data.data.username
      this.role = data.data.role;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

}
