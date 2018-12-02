import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { GalleryHolderComponent } from './gallery-view/gallery-holder/gallery-holder.component';

import { GalleryService } from './services/gallery.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers , effects } from './store';

@NgModule({
  declarations: [GalleryViewComponent, GalleryHolderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GalleryRoutingModule,
    StoreModule.forFeature('gallery', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [GalleryService]
})
export class GalleryModule { }
