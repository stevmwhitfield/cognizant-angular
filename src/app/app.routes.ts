import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bio', component: BioComponent },
    { path: 'bio/:id', component: BioDetailsComponent },
];
