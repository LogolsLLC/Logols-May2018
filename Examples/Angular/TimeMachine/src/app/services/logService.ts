import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Log } from '../entities/Log';

@Injectable()
export class LogService {
    url: string = "http://localhost:5000/api/TimeTravelLog/";

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Log[]>(this.url);
    }

    public get(id: number) {
        return this.http.get<Log>(this.url + id);
    }

    public update(log: Log) {
        return this.http.put(this.url, log);
    }

    public insert(log: Log) {
        return this.http.post(this.url, log);
    }

    public delete(id: number) {
        return this.http.delete(this.url + id);
    }
}