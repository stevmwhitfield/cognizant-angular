import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.css',
})
export class BioComponent implements OnInit {
    devs!: Developer[];

    ngOnInit(): void {
        this.loadDeveloper();
    }

    loadDeveloper() {
        this.devs = [
            new Developer('John', 'Doe', 'Java', 2020),
            new Developer('Jane', 'Smith', 'TypeScript', 2022),
            new Developer('Bob', 'Johnson', 'Go', 2024),
        ];
    }
}
