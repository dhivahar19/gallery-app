import * as fromPhotos from './../actions/photos.action';
import { Image } from './../../models/image.model';

export interface PhotoState {
    // data: Image[];
    entities: {[id: number]: Image};
    loaded: boolean;
    loading: boolean;
}

export const initialState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromPhotos.PhotosAction): PhotoState {
    switch (action.type) {
        case fromPhotos.LOAD_PHOTOS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromPhotos.LOAD_PHOTOS_SUCCESS: {
            const photos = action.payload;
            const entities = photos.reduce(
                (entities: { [id: number]: Image}, photo: Image) => {
                    return {
                        ...entities,
                        [photo.id] : photo
                    };
                },
                {
                ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case fromPhotos.LOAD_PHOTOS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export const getPhotosLoading = (state: PhotoState) => state.loading;
export const getPhotosLoaded = (state: PhotoState) => state.loaded;
export const getPhotosEntities = (state: PhotoState) => state.entities;
