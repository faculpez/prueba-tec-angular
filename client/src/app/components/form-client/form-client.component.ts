import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Component({
  selector: 'app-form-client',
  template: `<h2>New client</h2>
  <form (ngSubmit)="createClient()">
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" [(ngModel)]="newClient.name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" [(ngModel)]="newClient.email" required>
    </div>
    <div>
      <label for="phoneNumber">Number Phone:</label>
      <input type="tel" name="phoneNumber" [(ngModel)]="newClient.phoneNumber" required>
    </div>
    <button type="submit">Create client</button>
  </form>`,
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent {
  newClient = {
    name: '',
    email: '',
    phoneNumber: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  createClient() {
    this.http.post('http://localhost:4000/clients', this.newClient, httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Created OK')
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error(error);
          alert('Invalid')
          // Aquí podrías mostrar un mensaje de error al usuario
          // si la petición no se completó correctamente.
        }
      );
      }

}
