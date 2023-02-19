import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router'

interface LoginResponse {
  message: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  

  constructor(private http: HttpClient,private router: Router){}

  ngOnInit() {
  }
  onSubmit() {
    const body = { username: this.username, password: this.password };
    console.log(body);
    this.http.post<LoginResponse>('http://localhost:4000/login', body).subscribe(response => {
      console.log(response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error(error);
      alert('invalid username or password')
    });
  }
}
