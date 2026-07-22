import { Component } from '@angular/core';
import { GALLERY_SECTIONS } from '../../data/gallery.data';
import { GallerySectionComponent } from "../../../../shared/components/gallery-section/gallery-section";

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.html',
  styleUrls: ['./gallery-grid.scss'],
  imports: [GallerySectionComponent]
})
export class GalleryGridComponent {

  sections = GALLERY_SECTIONS;

}
