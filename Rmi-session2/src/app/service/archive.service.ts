import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataView } from '../../assets/data/model/model.view';
import { Observable, of } from 'rxjs';


@Injectable()

export class ArchiveService {
    private _url: string = '../../assets/data/data_test/archive.data.json'; // @TODO: tranform environnement

    constructor(private http: HttpClient){}

    getData(): Observable<IDataView[]>{
        return this.http.get<IDataView[]>(this._url);
    }


}