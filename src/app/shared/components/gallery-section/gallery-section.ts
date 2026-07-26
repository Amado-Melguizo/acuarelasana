import { Component, Input } from '@angular/core';
import { GalleryCategory, GalleryImage } from '../../interfaces/gallery-section.interface';
import { GalleryCard } from '../../../features/gallery/components/gallery-card/gallery-card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryLightbox } from "../../../features/gallery/components/gallery-lightbox/gallery-lightbox";

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.html',
  styleUrls: ['./gallery-section.scss'],
  imports: [GalleryCard, RouterLink, CommonModule, GalleryLightbox],
})
export class GallerySectionComponent {
  @Input()
  section!: GalleryCategory;
  selectedImage?: GalleryImage;

  showLightbox = false;

  openLightbox(image: GalleryImage) {
    this.selectedImage = image;
    this.showLightbox = true;
  }

  closeLightbox() {
    this.showLightbox = false;
  }
}
