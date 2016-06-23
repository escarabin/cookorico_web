import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
    getAllJobs() {
        return ['test', 'test 2']
    }
}
