import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPhotos from './photos.reducer';

export interface GalleryState {
    photos: fromPhotos.PhotoState;
}

export const reducers: ActionReducerMap<GalleryState> = {
    photos: fromPhotos.reducer,
};

export const getGalleryState = createFeatureSelector<GalleryState>(
    'gallery'
);

