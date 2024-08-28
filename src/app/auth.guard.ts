import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Prevents unauthorized access to protected routes
 * @returns true if the user is authenticated, otherwise returns a UrlTree
 */
export const authGuard: CanActivateFn = () => {
    const isAuthenticated = inject(AuthService).isLoggedIn();

    if (!isAuthenticated) {
        const tree = inject(Router).parseUrl('/');
        return tree;
    }

    return true;
};
