import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';

const routes: Routes = [
  {path:'', component:DashboardComponent} ,//home
  {path:'students', component:StudentlistComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
