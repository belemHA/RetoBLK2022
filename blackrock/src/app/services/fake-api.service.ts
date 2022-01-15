import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../../classes/user';

const ruta = "http://localhost:3000/users"

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${ruta}`);
  }

  register(user: user) {
    return this.http.post(`${ruta}`, user);
  }

}
