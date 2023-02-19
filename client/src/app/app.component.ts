import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'client';
  changeName(){
    if(this.title === 'client'){
      this.title= 'facu'
    }else{
      this.title= 'client';
    }
  }
}
