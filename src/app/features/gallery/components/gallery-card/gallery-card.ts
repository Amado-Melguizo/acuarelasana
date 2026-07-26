import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../../../shared/interfaces/gallery-section.interface';

@Component({
  selector: 'app-gallery-card',
  imports: [],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.scss',
})
export class GalleryCard {
  @Input() image!: GalleryImage;

  @Input() title!: string;

  @Input() price?: string;
  @Output() open = new EventEmitter<GalleryImage>();

  openImage() {
    this.open.emit(this.image);
  }
}
