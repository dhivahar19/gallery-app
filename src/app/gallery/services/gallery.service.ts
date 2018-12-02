import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Image } from './../models/image.model';

@Injectable()
export class GalleryService {
    readonly API_URL = 'https://jsonplaceholder.typicode.com';
    constructor(private http: HttpClient) {
    }
    getImages(): Observable<Image[]> {
        return this.http
            .get<Image[]>(`${this.API_URL}/photos`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
