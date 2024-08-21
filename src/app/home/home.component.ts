import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BioComponent } from '../bio/bio.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, BioComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    title = 'Hello from Angular';
    myColor = 'red';

    changeColor() {
        this.myColor = 'green';
    }
}
