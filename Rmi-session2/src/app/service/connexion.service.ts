import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataUser } from '../../assets/data/model/model.user';
import { Observable, of } from 'rxjs';


@Injectable()

export class ConnexionService {
    private _url: string = '../assets/data/data_test/user.data.json'; // @TODO: tranform environnement

    constructor(private http: HttpClient){}

    getData(): Observable<IDataUser[]>{
        return this.http.get<IDataUser[]>(this._url);
    }


}
