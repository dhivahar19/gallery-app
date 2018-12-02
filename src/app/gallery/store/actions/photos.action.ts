import { Action } from '@ngrx/store';
import { Image } from './../../models/image.model';

// load photos
export const LOAD_PHOTOS = '[GALLERY] Load Photos';
export const LOAD_PHOTOS_FAIL = '[GALLERY] Load Photos Fail';
export const LOAD_PHOTOS_SUCCESS = '[GALLERY] Load Photos Success';

export class LoadPhotos implements Action {
    readonly type = LOAD_PHOTOS;
}

export class LoadPhotosFail implements Action {
    readonly type = LOAD_PHOTOS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPhotosSuccess implements Action {
    readonly type = LOAD_PHOTOS_SUCCESS;
    constructor(public payload: Image[]) {}
}

// Action types
export type PhotosAction = LoadPhotos | LoadPhotosFail | LoadPhotosSuccess;
