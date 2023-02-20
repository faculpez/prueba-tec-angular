import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PhonesComponent } from './components/phones/phones.component';
import { FixesComponent } from './components/fixes/fixes.component';
import { FormClientComponent } from './components/form-client/form-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    ClientsComponent,
    PhonesComponent,
    FixesComponent,
    FormClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
