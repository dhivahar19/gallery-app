import { Component, Input, OnInit } from '@angular/core';
import { Image } from './../../models/image.model';

@Component({
  selector: 'app-gallery-holder',
  templateUrl: './gallery-holder.component.html',
  styleUrls: ['./gallery-holder.component.scss']
})
export class GalleryHolderComponent implements OnInit {
  @Input() dataInput: Image;

  constructor() {
  }
  ngOnInit() {

  }
}
