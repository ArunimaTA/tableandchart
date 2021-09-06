import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DefaultService } from 'src/app/layout/default.service';



export interface TableData {
  month: string;
  production: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA!: TableData[];
  displayedColumns: string[] = ["month", "production"];
  dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);


  constructor(private data: DefaultService) { }

  ngOnInit() {
    this.getAllData();
  }

  public getAllData() {
    let resp = this.data.getTableData();
    resp.subscribe(report => this.dataSource.data = report["tabledata"] as TableData[]);
  }

}
