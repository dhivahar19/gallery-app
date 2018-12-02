import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './../store';
import { Image } from './../models/image.model';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  title: string;
  images: Image[] = [];
  step: number;
  min: number;
  max: number;
  value: number;
  switchStatus: Boolean = true;

  constructor(private store: Store<fromStore.GalleryState>) {
    this.title = 'Image Carousal';
    this.step = 1;
    this.min = 0;
    this.value = 0;
  }

  ngOnInit() {
    this.store.select(fromStore.getAllPhotos).subscribe(state => {
      this.images = state.slice(0, 10);
      this.max = this.images.length;
    });
    this.store.dispatch(new fromStore.LoadPhotos());
  }

  /**
   * @description - To load next image when clicks on next button
   */
  nextImgClick() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  /**
   * @description - To load previous image when clicks on prev button
   */
  prevImgClick() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }
}
