import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
    getAllJobs() {
        return [
            { 'title': 'test' },
            { 'title': 'test2' }];
    }
}