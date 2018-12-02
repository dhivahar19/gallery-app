import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

import { Image } from './../../models/image.model';

import * as fromRoot from './../../store';
import * as fromReducers from './../reducers';
import * as fromActions from './../actions';
import * as fromSelectors from './../selectors';

describe('Photos Selectors', () => {
    let store: Store<fromReducers.GalleryState>;

    const photo1: Image = {
            albumId : 1,
            id: 1,
            title : 'accusamus beatae ad facilis cum similique qui sunt 1',
            thumbnailUrl : 'https://via.placeholder.com/150/92c952',
            url : 'https://via.placeholder.com/600/92c952'
    };
    const photo2: Image = {
        albumId : 1,
        id: 2,
        title : 'accusamus beatae ad facilis cum similique qui sunt 2',
        thumbnailUrl : 'https://via.placeholder.com/150/92c952',
        url : 'https://via.placeholder.com/600/92c952'
    };
    const photos: Image[] = [ photo1, photo2 ];
    const entities = {
        1 : photo1,
        2 : photo2
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    gallery: combineReducers(fromReducers.reducers),
                })
            ]
        });
        store = TestBed.get(Store);
    });

    describe('getPhotoState', () => {
        it('It should return state of photos store slice', () => {
            let result;
            store
            .select(fromSelectors.getPhotoState)
            .subscribe(value => (result = value));

            expect(result).toEqual({
                entities: {},
                loaded: false,
                loading: false
            });
            store.dispatch(new fromActions.LoadPhotosSuccess(photos));
            expect(result).toEqual({
                entities,
                loaded: true,
                loading: false
            });
        });
    });
    describe('getPhotosEntities', () => {
        it('It should return photos as an entities', () => {
            let result;
            store
            .select(fromSelectors.getPhotosEntities)
            .subscribe(value => (result = value));

            expect(result).toEqual({});

            store.dispatch( new fromActions.LoadPhotosSuccess(photos));

            expect(result).toEqual(entities);
        });
    });
    describe('getAllPhotos', () => {
        it('It should return photos as an array', () => {
            let result;
            store
            .select(fromSelectors.getAllPhotos)
            .subscribe(value => (result = value));

            expect(result).toEqual([]);

            store.dispatch( new fromActions.LoadPhotosSuccess(photos));

            expect(result).toEqual(photos);
        });
    });
});
