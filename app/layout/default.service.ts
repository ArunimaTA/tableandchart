import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _http: HttpClient) { }


  public getTableData(): Observable<any> {
    return this._http.get("https://run.mocky.io/v3/76eb98d9-44c3-4744-8bd1-10a01a37222a");
  }
}


