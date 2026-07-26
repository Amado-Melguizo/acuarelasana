import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../../../shared/interfaces/gallery-section.interface';

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.html',
  styleUrl: './gallery-lightbox.scss'
})
export class GalleryLightbox {

  @Input() image!: GalleryImage;

  @Output() close = new EventEmitter<void>();

}
