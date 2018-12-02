import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as PhotoActions from '../actions/photos.action';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { GalleryService } from './../../services/gallery.service';

@Injectable()
export class PhotosEffects {
    constructor(
        private actions$: Actions,
        private galleryService: GalleryService
        ) {}

    @Effect()
    loadPhotos$ = this.actions$.ofType(PhotoActions.LOAD_PHOTOS)
                    .pipe(
                        switchMap(() => {
                            return this.galleryService.getImages().pipe(
                                map(photos => new PhotoActions.LoadPhotosSuccess(photos)),
                                catchError(error => of(new PhotoActions.LoadPhotosFail(error)))
                            );
                        })
                    );
}
