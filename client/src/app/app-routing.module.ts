import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'dashboard/clients', component: ClientsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
