import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../data';
import { Observable, of } from 'rxjs';


@Injectable()

export class DataService {
    private _url: string = '../assets/data/bdd.json';

    constructor(private http: HttpClient){}

    getData(): Observable<IData[]>{
        return this.http.get<IData[]>(this._url);
    }
}
