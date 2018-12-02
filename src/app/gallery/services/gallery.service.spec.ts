import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
    let injector: TestBed;
    let service: GalleryService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GalleryService]
        });
        injector = getTestBed();
        service = injector.get(GalleryService);
        httpMock = injector.get(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });
    describe('#getImages', () => {
        it('should return an Observable<Image[]>', () => {
        const mockImages = [
            {
            albumId: 1 ,
            id: 1 ,
            title: 'accusamus beatae ad facilis cum similique qui sunt 1',
            url: 'https://via.placeholder.com/600/92c952' ,
            thumbnailUrl: 'https://via.placeholder.com/150/92c952'
            },
            {
                albumId: 1 ,
                id: 2 ,
                title: 'accusamus beatae ad facilis cum similique qui sunt 2',
                url: 'https://via.placeholder.com/600/92c952' ,
                thumbnailUrl: 'https://via.placeholder.com/150/92c952'
            }
        ];

        service.getImages().subscribe(images => {
            expect(images.length).toBe(2);
            expect(images).toEqual(mockImages);
        });

        const req = httpMock.expectOne(`${service.API_URL}/photos`);
        expect(req.request.method).toBe('GET');
        req.flush(mockImages);
        });
    });
});
