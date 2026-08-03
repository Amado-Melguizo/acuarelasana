import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-hero',
  standalone: true,
  templateUrl: './gallery-hero.html',
  styleUrl: './gallery-hero.scss'
})
export class GalleryHero {

  @Input() title = '';

  @Input() description = '';

}
