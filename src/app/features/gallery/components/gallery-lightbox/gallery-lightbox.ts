import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../../../shared/interfaces/gallery-section.interface';
import { ProtectedImageComponent } from "../../../../shared/components/protected-image-component/protected-image-component";

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.html',
  styleUrl: './gallery-lightbox.scss',
  imports: [ProtectedImageComponent]
})
export class GalleryLightbox {

  @Input() image!: GalleryImage;

  @Output() close = new EventEmitter<void>();

}
