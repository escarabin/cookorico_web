import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class BusinessService {

    constructor(private http: Http) {

    }
}