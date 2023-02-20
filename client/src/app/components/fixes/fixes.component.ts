import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface FixResponse {
  fixes: Fix[];
}

interface Fix {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Component({
  selector: 'app-my-component',
  template: `
    <a routerLink="/dashboard">Home</a>
    <h1>Phones</h1>
    <button routerLink="/dashboard/clients">Back</button>
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let fix of fixes">
      <td>{{ fix.status }}</td>
      <td><p>{{ fix.description }}</p></td>
    </tr>
  </tbody>
</table>
  `
})

export class FixesComponent implements OnInit {
  fixes: any[] = [];
  idPhone: string | null = null;
  
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.idPhone = this.route.snapshot.paramMap.get('id');
    this.http.get<FixResponse>(`http://localhost:4000/phones/${this.idPhone}/fixes`,httpOptions)
    .subscribe(data => {
      console.log(data);
      this.fixes = data.fixes;
    });
    
  }
}