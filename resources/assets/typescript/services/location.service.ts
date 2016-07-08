import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class LocationService {
    constructor(private http: Http) {

    }
}