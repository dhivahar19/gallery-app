import * as fromPhotos from './photos.action';

describe('Photos Actions', () => {

    describe('LoadPhoto Actions', () => {
        describe('LoadPhotos', () => {
            it('It should create an action', () => {
                const action = new fromPhotos.LoadPhotos();
                expect({ ...action }).toEqual({
                    type: fromPhotos.LOAD_PHOTOS
                });
            });
        });
        describe('LoadPhotosFail', () => {
            it('It should create an action', () => {
                const payload = { message: 'Load error'};
                const action = new fromPhotos.LoadPhotosFail(payload);
                expect({ ...action }).toEqual({
                    type: fromPhotos.LOAD_PHOTOS_FAIL,
                    payload
                });
            });
        });
        describe('LoadPhotosSuccess', () => {
            it('It should create an action', () => {
                const payload = [
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
                const action = new fromPhotos.LoadPhotosSuccess(payload);
                expect({ ...action }).toEqual({
                    type: fromPhotos.LOAD_PHOTOS_SUCCESS,
                    payload
                });
            });
        });
    });

});
