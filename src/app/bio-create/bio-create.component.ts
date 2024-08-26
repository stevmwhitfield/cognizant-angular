import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bio-create',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './bio-create.component.html',
    styleUrl: './bio-create.component.css',
})
export class BioCreateComponent {
    constructor(private devService: DeveloperService, private router: Router) {}

    devForm = new FormGroup({
        firstName: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
        ]),
        lastName: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
        ]),
        favoriteLanguage: new FormControl('', [
            Validators.required,
            Validators.minLength(1),
        ]),
        yearStarted: new FormControl(0, [
            Validators.required,
            Validators.min(1900),
        ]),
    });

    handleSubmit() {
        if (!this.devForm.valid) {
            return;
        }
        this.saveDeveloper();
    }

    saveDeveloper() {
        const { firstName, lastName, favoriteLanguage, yearStarted } =
            this.devForm.value;

        const dev = new Developer(
            null,
            firstName as string,
            lastName as string,
            favoriteLanguage as string,
            yearStarted as number
        );
        this.devService.addDeveloper(dev).subscribe((dev) => {
            this.router.navigate([`/bio/${dev.id}`]);
        });
    }

    get firstName() {
        return this.devForm.get('firstName');
    }

    get lastName() {
        return this.devForm.get('lastName');
    }

    get favoriteLanguage() {
        return this.devForm.get('favoriteLanguage');
    }

    get yearStarted() {
        return this.devForm.get('yearStarted');
    }
}
