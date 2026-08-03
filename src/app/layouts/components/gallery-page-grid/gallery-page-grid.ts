import { Component, Input } from '@angular/core';
import { GalleryImage } from '../../../shared/interfaces/gallery-section.interface';
import { GalleryCard } from '../../../features/gallery/components/gallery-card/gallery-card';
import { GalleryLightbox } from '../../../features/gallery/components/gallery-lightbox/gallery-lightbox';

@Component({
  selector: 'app-gallery-page-grid',
  standalone: true,
  imports: [
    GalleryCard,
    GalleryLightbox
  ],
  templateUrl: './gallery-page-grid.html',
  styleUrl: './gallery-page-grid.scss'
})
export class GalleryPageGrid {

  @Input()
  images: GalleryImage[] = [];

  selectedImage?: GalleryImage;

  showLightbox = false;

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    this.showLightbox = true;
  }

  closeLightbox(): void {
    this.showLightbox = false;
    this.selectedImage = undefined;
  }

}
