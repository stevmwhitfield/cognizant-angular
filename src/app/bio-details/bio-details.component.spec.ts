import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailsComponent } from './bio-details.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';

describe('BioDetailsComponent', () => {
    let component: BioDetailsComponent;
    let fixture: ComponentFixture<BioDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BioDetailsComponent],
            providers: [provideRouter(routes), provideHttpClient()],
        }).compileComponents();

        fixture = TestBed.createComponent(BioDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
