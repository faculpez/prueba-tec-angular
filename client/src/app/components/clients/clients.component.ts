import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface ClientResponse {
  clients: Client[];
}

interface Client {
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
    <h1>Lista de usuarios:</h1>
<button routerLink="/dashboard">Back</button>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let client of clients">
      <td>{{ client.name }}</td>
      <td>{{ client.email }}</td>
      <td>{{ client.phoneNumber }}</td>
    </tr>
  </tbody>
</table>
  `
})

export class ClientsComponent implements OnInit {
  clients: any[] = [];
  
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<ClientResponse>('http://localhost:4000/clients',httpOptions)
    .subscribe(data => {
      this.clients = data.clients;
    });
    
  }
}