import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../../../shared/interfaces/gallery-section.interface';
import { Router } from '@angular/router';
import { RequestService } from '../../../../core/services/request.service';
import { ProtectedImageComponent } from "../../../../shared/components/protected-image-component/protected-image-component";

@Component({
  selector: 'app-gallery-card',
  imports: [ProtectedImageComponent],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.scss',
})
export class GalleryCard {
  @Input() image!: GalleryImage;

  @Input() title!: string;

  @Input() price?: string;
  @Output() open = new EventEmitter<GalleryImage>();
constructor(
    private readonly router: Router,
    private readonly requestService: RequestService
) {}
  openImage() {
    this.open.emit(this.image);
  }
  requestPainting() {

    this.requestService.select(
        'Información sobre una obra',
        this.image.title
    );

    this.router.navigate(['/services']);

}
}
