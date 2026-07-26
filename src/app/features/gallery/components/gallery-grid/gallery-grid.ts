import { Component } from '@angular/core';
import { GALLERY_SECTIONS } from '../../data/gallery.data';
import { GallerySectionComponent } from "../../../../shared/components/gallery-section/gallery-section";

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [GallerySectionComponent],
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.scss'
})
export class GalleryGridComponent {

  sections = GALLERY_SECTIONS;

}
