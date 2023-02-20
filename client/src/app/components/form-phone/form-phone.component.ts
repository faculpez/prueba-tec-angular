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
  selector: 'app-form-phone',
  template: `<h2>New phone</h2>
  <form (ngSubmit)="createPhone()">
    <div>
      <label for="model">Model:</label>
      <input type="text" name="model" [(ngModel)]="newPhone.model" required>
    </div>
    <div>
      <label for="brand">Brand:</label>
      <input type="text" name="brand" [(ngModel)]="newPhone.brand" required>
    </div>
    <div>
      <label for="clientID">clientId:</label>
      <input type="text" name="clientId" [(ngModel)]="newPhone.clientId" required>
    </div>
    <button type="submit">Create Phone</button>
  </form>`,
  styleUrls: ['./form-phone.component.css']
})
export class FormPhoneComponent {
  newPhone = {
    model: '',
    brand: '',
    clientId: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  createPhone() {
    this.http.post('http://localhost:4000/phones', this.newPhone, httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Created OK')
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error(error);
          alert('Invalid')
        }
      );
      }

}
