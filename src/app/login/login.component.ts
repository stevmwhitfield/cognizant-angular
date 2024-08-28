import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.login();
    }

    login() {
        this.authService.login();
        this.router.navigate(['/']);
    }
}
