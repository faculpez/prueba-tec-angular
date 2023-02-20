import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { FixesComponent } from './components/fixes/fixes.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { LoginComponent } from './components/login/login.component';
import { PhonesComponent } from './components/phones/phones.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'dashboard/clients', component: ClientsComponent},
  { path: 'dashboard/clients/:id', component: PhonesComponent},
  { path: 'dashboard/phones/:id', component: FixesComponent},
  { path: 'dashboard/newclient', component: FormClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
