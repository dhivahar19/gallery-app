import { createSelector } from '@ngrx/store';

import * as fromFeature from './../reducers';
import * as fromPhotos from './../reducers/photos.reducer';

export const getPhotoState = createSelector(
    fromFeature.getGalleryState,
    (state: fromFeature.GalleryState) => state.photos
);

export const getPhotosEntities = createSelector(getPhotoState, fromPhotos.getPhotosEntities);
export const getAllPhotos = createSelector(getPhotosEntities, (entities) => {
    return Object.keys(entities).map(id => entities[id]);
});
export const getPhotosLoaded = createSelector(getPhotoState, fromPhotos.getPhotosLoaded);
export const getPhotosLoading = createSelector(getPhotoState, fromPhotos.getPhotosLoading);
