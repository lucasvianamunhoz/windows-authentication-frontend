import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get('https://localhost:7039/api/login', { withCredentials: true });
  }

}
