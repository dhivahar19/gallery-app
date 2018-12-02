import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { hot, cold} from 'jasmine-marbles';
import { Observable, empty, of } from 'rxjs';

import { GalleryService } from './../../services/gallery.service';
import * as fromEffects from './photos.effect';
import * as fromActions from './../actions/photos.action';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }
    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('Photos Effects', () => {
    let actions$: TestActions;
    let service: GalleryService;
    let effects: fromEffects.PhotosEffects;

    const photos = [
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                GalleryService,
                fromEffects.PhotosEffects,
                { provide: Actions, useFactory: getActions },
            ],
        });

        actions$ = TestBed.get(Actions);
        service = TestBed.get(GalleryService);
        effects = TestBed.get(fromEffects.PhotosEffects);

        spyOn(service, 'getImages').and.returnValue(of(photos));
    });

    describe('loadPhotos$', () => {
        it('It should return a collection from loadPhotosSuccess', () => {
            const action = new fromActions.LoadPhotos();
            const completion = new fromActions.LoadPhotosSuccess(photos);

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b : completion});

            expect(effects.loadPhotos$).toBeObservable(expected);
        });
    });
});




