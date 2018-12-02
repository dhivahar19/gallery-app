import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { GalleryViewComponent } from './gallery-view.component';
import { GalleryService } from './../services/gallery.service';

import { StoreModule, Store } from '@ngrx/store';
import { reducers } from './../store/reducers';
import * as fromStore from './../store';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;
  let store: Store<fromStore.GalleryState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent ],
      imports: [
        StoreModule.forRoot(reducers)
      ],
      providers: [
        HttpHandler,
        HttpClient,
        GalleryService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(GalleryViewComponent);
    component = fixture.componentInstance;
    component.max = 10;
    component.value = 0;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should move to next image correctly', () => {
    component.nextImgClick();
    expect(component.value).toBe(1);
  });

  it('Should move to prev image correctly', () => {
    component.nextImgClick();
    expect(component.value).toBe(1);
    component.prevImgClick();
    expect(component.value).toBe(0);
  });

  it('Should have as title Image Carousal', () => {
    expect(component.title).toEqual('Image Carousal');
  });
});
