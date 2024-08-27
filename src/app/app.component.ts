import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, LoginComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    isAuthenticated = false;

    ngOnInit() {
        this.getAuthState();
    }

    login() {
        this.authService.login();
        this.router.navigate(['/']);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    getAuthState() {
        this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
            console.log('isAuthenticated', isAuthenticated);
            this.isAuthenticated = isAuthenticated;
        });
    }
}
