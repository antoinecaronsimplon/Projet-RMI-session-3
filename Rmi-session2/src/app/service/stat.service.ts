import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataStat } from '../../assets/data/model/model.stat';
import { Observable, of } from 'rxjs';


@Injectable()

export class DataStat {
    private _url: string = '../../assets/data/data_test/stat.data.json';

    constructor(private http: HttpClient){}

    getData(): Observable<IDataStat[]>{
        return this.http.get<IDataStat[]>(this._url);
    }
}