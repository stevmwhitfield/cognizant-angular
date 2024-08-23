import { Component } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-bio-details',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './bio-details.component.html',
    styleUrl: './bio-details.component.css',
})
export class BioDetailsComponent {
    dev: Developer = new Developer('', '', '', '', 0);

    constructor(
        private devService: DeveloperService,
        private route: ActivatedRoute
    ) {
        this.devService.getAllDevelopers().subscribe((data) => data);
        this.getDeveloper();
    }

    getDeveloper() {
        const id = this.route.snapshot.paramMap.get('id') as string;
        this.dev = this.devService.getDeveloperById(id);
    }
}
