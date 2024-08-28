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
        this.authResponse.next(true);
    }

    logout() {
        this.authResponse.next(false);
    }

    isLoggedIn(): boolean {
        return this.authResponse.value;
    }
}
