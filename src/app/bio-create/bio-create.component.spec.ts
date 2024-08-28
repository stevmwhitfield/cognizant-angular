import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCreateComponent } from './bio-create.component';
import { provideHttpClient } from '@angular/common/http';

describe('BioCreateComponent', () => {
    let component: BioCreateComponent;
    let fixture: ComponentFixture<BioCreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BioCreateComponent],
            providers: [provideHttpClient()],
        }).compileComponents();

        fixture = TestBed.createComponent(BioCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
