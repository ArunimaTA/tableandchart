import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { TableComponent } from './tables/table/table.component';


const routes: Routes = [
  {path: '', component: BarchartComponent},
  { path: 'chart/barchart', component: BarchartComponent},
  {path: 'tables/table', component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
