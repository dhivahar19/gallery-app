import * as fromPhotos from './photos.reducer';
import * as fromActions from './../actions/photos.action';
import { Image } from './../../models/image.model';

describe('Photos Reducers', () => {
    describe('undefined action', () => {
        it('It should return the default state', () => {
            const { initialState } = fromPhotos;
            const action = {} as any;
            const state = fromPhotos.reducer(undefined, action);
            expect(state).toBe(initialState);
        });
    });
    describe('LOAD_PHOTOS action', () => {
        it('It should set loading true', () => {
            const { initialState } = fromPhotos;
            const action = new fromActions.LoadPhotos();
            const state = fromPhotos.reducer(initialState, action);
            expect(state.entities).toEqual({});
            expect(state.loading).toBe(true);
            expect(state.loaded).toBe(false);
        });
    });
    describe('LOAD_PHOTOS_SUCCESS action', () => {
        it('It should map an array to entity', () => {
            const photos: Image[] = [
                {
                    albumId : 1,
                    id: 1,
                    title : 'accusamus beatae ad facilis cum similique qui sunt 1',
                    thumbnailUrl : 'https://via.placeholder.com/150/92c952',
                    url : 'https://via.placeholder.com/600/92c952'
                },
                {
                    albumId : 1,
                    id: 2,
                    title : 'accusamus beatae ad facilis cum similique qui sunt 2',
                    thumbnailUrl : 'https://via.placeholder.com/150/92c952',
                    url : 'https://via.placeholder.com/600/92c952'
                }
            ];
            const entities = {
                1: photos[0],
                2: photos[1]
            };
            const { initialState } = fromPhotos;
            const action = new fromActions.LoadPhotosSuccess(photos);
            const state = fromPhotos.reducer(initialState, action);
            expect(state.entities).toEqual(entities);
            expect(state.loading).toBe(false);
            expect(state.loaded).toBe(true);
        });
    });
    describe('LOAD_PHOTOS_FAIL action', () => {
        it('It should return initial state', () => {
            const { initialState } = fromPhotos;
            const action = new fromActions.LoadPhotosFail(initialState);
            const state = fromPhotos.reducer(initialState, action);
            expect(state).toEqual(initialState);
        });
        it('It should return previous state', () => {
            const { initialState } = fromPhotos;
            const previousState = { ...initialState, loading: false};
            const action = new fromActions.LoadPhotosFail(initialState);
            const state = fromPhotos.reducer(previousState, action);
            expect(state).toEqual(initialState);
        });
    });
});
