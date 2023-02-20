import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface PhoneResponse {
  phones: Phone[];
}

interface Phone {
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
      <th>Model</th>
      <th>Brand</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let phone of phones">
      <td>{{ phone.model }}</td>
      <td>{{ phone.brand }}</td>
      <td>{{ phone.client }}</td>
    </tr>
  </tbody>
</table>
  `
})

export class PhonesComponent implements OnInit {
  phones: any[] = [];
  idClient: string | null = null;
  
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.idClient = this.route.snapshot.paramMap.get('id');
    this.http.get<PhoneResponse>(`http://localhost:4000/clients/${this.idClient}/phones`,httpOptions)
    .subscribe(data => {
      
      this.phones = data.phones;
    });
    
  }
}