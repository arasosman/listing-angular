import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {AdminNumbersComponent} from './admin/admin-numbers/admin-numbers.component';
import {AdminAddNumbersComponent} from './admin/admin-add-numbers/admin-add-numbers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminDashboardComponent, },
  {path: 'admin/numbers', component: AdminNumbersComponent },
  {path: 'admin/numbers/add', component: AdminAddNumbersComponent },
  {path: '**', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
