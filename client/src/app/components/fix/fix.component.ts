import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface FixResponse {
  fixes: Fix[];
}

interface Fix {
  id: number;
  status: string;
  description: string;
  phoneId: string;
  createdAt: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Component({
  selector: 'app-fix',
  template: `
  <a routerLink="/dashboard">Home</a>
    <h1>Clients:</h1>
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
      <th>PhoneID</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let fix of fixes">
      <td>{{ fix.status }}</td>
      <td>{{ fix.description }}</td>
      <td>{{ fix.phoneId }}</td>
      <td>{{ fix.createdAt }}</td>
    </tr>
  </tbody>
</table>
  `
})

export class FixComponent implements OnInit {
  fixes: any[] = [];
  
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<FixResponse>('http://localhost:4000/fixes',httpOptions)
    .subscribe(data => {
      this.fixes = data.fixes;
    });
    
  }
}