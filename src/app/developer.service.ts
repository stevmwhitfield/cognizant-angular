import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DeveloperService {
    devs: Developer[] = [];
    url =
        'https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers';

    // constructor() {
    //     this.devs = [
    //         new Developer(1, 'John', 'Doe', 'Java', 2020),
    //         new Developer(2, 'Jane', 'Smith', 'TypeScript', 2022),
    //         new Developer(3, 'Bob', 'Johnson', 'Go', 2024),
    //     ];
    // }

    // getAllDevelopers(): Developer[] {
    //     return this.devs;
    // }

    constructor(private http: HttpClient) {}

    getAllDevelopers(): Observable<Developer[]> {
        return this.http.get<Developer[]>(`${this.url}/all`).pipe(
            map((data) => {
                this.devs = data;
                return data;
            }),
            catchError(this.handleError('getHeroes', 'get', []))
        );
    }

    getDeveloperById(id: string): Developer {
        return this.devs.find((dev) => dev.id === id) as Developer;
    }

    addDeveloper(dev: Developer): Observable<Developer> {
        const url = `${this.url}/add`;
        const options = {
            headers: { 'Content-Type': 'application/json' },
        };
        return this.http
            .post<Developer>(url, dev, options)
            .pipe(catchError(this.handleError('postDeveloper', 'post', dev)));
    }

    handleError<T>(
        serviceName = '',
        operation = 'operation',
        result = {} as T
    ) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error(error);
            const message =
                error.error instanceof ErrorEvent
                    ? error.error.message
                    : `Error ${error.status}: ${error.error}`;
            console.log(`${serviceName}: ${operation} failed: ${message}`);
            return of(result);
        };
    }
}
