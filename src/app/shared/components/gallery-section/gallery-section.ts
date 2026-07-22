import { Component, Input } from '@angular/core';
import { GallerySection } from '../../interfaces/gallery-section.interface';
import { GalleryCard } from "../../../features/gallery/components/gallery-card/gallery-card";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.html',
  styleUrls: ['./gallery-section.scss'],
  imports: [GalleryCard,RouterLink,CommonModule]
})
export class GallerySectionComponent {

  @Input()
  section!: GallerySection;

}
