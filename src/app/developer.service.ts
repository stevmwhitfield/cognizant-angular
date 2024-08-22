import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
    providedIn: 'root',
})
export class DeveloperService {
    devs: Developer[];

    constructor() {
        this.devs = [
            new Developer(1, 'John', 'Doe', 'Java', 2020),
            new Developer(2, 'Jane', 'Smith', 'TypeScript', 2022),
            new Developer(3, 'Bob', 'Johnson', 'Go', 2024),
        ];
    }

    getAllDevelopers(): Developer[] {
        return this.devs;
    }

    getDeveloperById(id: number): Developer {
        return this.devs.find((dev) => dev.id === id) as Developer;
    }
}
