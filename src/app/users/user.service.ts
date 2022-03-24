import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) {

  }

  login(user: any): Observable<any> {
    return this.http.post("https://ntbr-api.herokuapp.com/api/users/login", { username: user.email, password: user.password });
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  getUserData(id: number): Observable<any> {
    return this.http.get(
      "https://ntbr-api.herokuapp.com/api/users/" + id,
      {
        headers: new HttpHeaders({
          'auth': String(this.getStorage('token')),
        })
      }
    )
  }

  setStorage(id: string, value: string): void {
      localStorage.setItem(id, value);
    }

  getStorage(id: string): string | null {
      return localStorage.getItem(id);
    }

}
