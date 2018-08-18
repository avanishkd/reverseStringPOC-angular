import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }

    getReverse(text) {
        return this.http.get<string>(`http://localhost:8090/api/reverse/${text}`, { responseType: text });
    }
}
