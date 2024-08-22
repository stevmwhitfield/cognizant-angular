import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bio-details',
    standalone: true,
    imports: [],
    templateUrl: './bio-details.component.html',
    styleUrl: './bio-details.component.css',
})
export class BioDetailsComponent implements OnInit {
    dev: Developer = new Developer(0, '', '', '', 0);

    constructor(
        private devService: DeveloperService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getDeveloper();
    }

    getDeveloper() {
        const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
        this.dev = this.devService.getDeveloperById(id);
    }
}
