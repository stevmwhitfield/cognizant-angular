import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authResponse = new BehaviorSubject<boolean>(false);
    private isAuthenticated = this.authResponse.asObservable();

    get isAuthenticated$(): Observable<boolean> {
        return this.isAuthenticated;
    }

    login() {
        console.log('AuthService.login');
        this.authResponse.next(true);
    }

    logout() {
        console.log('AuthService.logout');
        this.authResponse.next(false);
    }
}
