import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';
import {
    HttpTestingController,
    provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('DeveloperService', () => {
    const fakeDevelopers = [
        new Developer(null, 'John', 'Doe', 'Java', 2020),
        new Developer(null, 'Jane', 'Smith', 'TypeScript', 2022),
        new Developer(null, 'Bob', 'Johnson', 'Go', 2024),
    ];

    let service: DeveloperService;
    let httpTestingController: HttpTestingController;

    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(fakeDevelopers);

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                DeveloperService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });
        service = TestBed.inject(DeveloperService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all developers', () => {
        const mockResponse = [
            new Developer(null, 'John', 'Doe', 'Java', 2020),
            new Developer(null, 'Jane', 'Smith', 'TypeScript', 2022),
            new Developer(null, 'Bob', 'Johnson', 'Go', 2024),
        ];

        service.getAllDevelopers().subscribe((data) => {
            expect(data).toEqual(mockResponse);
        });

        const req = httpTestingController.expectOne(`${service.url}/all`);
        expect(req.request.method).toEqual('GET');
        req.flush(mockResponse);
    });

    it('should add a developer', () => {
        const mockResponse = new Developer(null, 'John', 'Doe', 'Java', 2020);

        service.addDeveloper(mockResponse).subscribe((data) => {
            expect(data).toEqual(mockResponse);
        });

        const req = httpTestingController.expectOne(`${service.url}/add`);
        expect(req.request.method).toEqual('POST');
        req.flush(mockResponse);
    });
});
