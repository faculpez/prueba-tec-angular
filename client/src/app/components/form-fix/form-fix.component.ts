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
  selector: 'app-form-fix',
  template: `<h2>New Fix</h2>
  <form (ngSubmit)="createFix()">
    <div>
      <label for="status">status:</label>
      <input type="text" name="status" [(ngModel)]="newFix.status" required>
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea type="text" name="description" [(ngModel)]="newFix.description" required></textarea>
    </div>
    <div>
      <label for="phoneID">PhoneId:</label>
      <input type="text" name="phoneId" [(ngModel)]="newFix.phoneId" required>
    </div>
    <button type="submit">Create Fix</button>
  </form>
  `,
  styleUrls: ['./form-fix.component.css']
})
export class FormFixComponent {
  newFix = {
    status: '',
    description: '',
    phoneId: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  createFix() {
    this.http.post('http://localhost:4000/fixes', this.newFix, httpOptions)
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
