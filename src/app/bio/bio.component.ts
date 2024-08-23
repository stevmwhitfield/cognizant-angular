import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-bio',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.css',
})
export class BioComponent {
    devs: Developer[] = [];

    constructor(private devService: DeveloperService) {
        this.devService
            .getAllDevelopers()
            .subscribe((data) => (this.devs = data));
    }
}
