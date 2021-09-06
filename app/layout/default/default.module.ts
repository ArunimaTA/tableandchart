import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { BarchartComponent } from 'src/app/chart/barchart/barchart.component';
import { TableComponent } from 'src/app/tables/table/table.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { DefaultService } from '../default.service';




@NgModule({
  declarations: [
    DefaultComponent,
    BarchartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ChartsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [DefaultService]
})
export class DefaultModule { }
