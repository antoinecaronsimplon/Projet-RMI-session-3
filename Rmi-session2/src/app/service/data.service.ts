import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../data';
import { Observable, of } from 'rxjs';


@Injectable()

export class DataService {
    private _url: string = '../assets/data/list_commande.json'; // @TODO: tranform environnement

    constructor(private http: HttpClient){}

    getData(): Observable<IData[]>{
        return this.http.get<IData[]>(this._url);
    }


}
