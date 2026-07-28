import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../../../core/services/cloudinary.service';
import { FirestoreService } from '../../../../core/services/firestore.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Artwork } from '../../../../core/models/artwork.model';
import { AlertService } from '../../../../core/services/alert.services';

@Component({
  selector: 'app-artwork-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './artwork-form.html',
  styleUrl: './artwork-form.scss',
})
export class ArtworkForm implements OnChanges {
  selectedFile: File | null = null;

  preview: string | null = null;

  loading = false;

  @Input()
  artwork?: Artwork;
  @Output()
  saved = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['artwork'] || !this.artwork) {
      return;
    }

    this.form.patchValue({
      title: this.artwork.title,

      description: this.artwork.description,

      category: this.artwork.category,

      style: this.artwork.style,

      price: this.artwork.price,

      available: this.artwork.available,
    });

    this.preview = this.artwork.imageUrl;
  }
  private readonly fb = inject(FormBuilder);
  private readonly cloudinaryService = inject(CloudinaryService);
  private readonly alertService = inject(AlertService);
  private readonly firestoreService = inject(FirestoreService);
  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
    category: ['', Validators.required],
    style: [''],
    price: [0, Validators.required],
    available: [true],
  });
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    this.selectedFile = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.preview = reader.result as string;
    };

    reader.readAsDataURL(this.selectedFile);
  }

  async saveArtwork() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.selectedFile && !this.artwork) {
      alert('Selecciona una imagen.');

      return;
    }

    this.loading = true;

    try {
      let imageUrl = this.artwork?.imageUrl ?? '';

      let publicId = this.artwork?.publicId ?? '';

      // Si el usuario ha seleccionado una imagen nueva
      if (this.selectedFile) {
        const image = await this.cloudinaryService.uploadImage(this.selectedFile);

        imageUrl = image.secure_url;

        publicId = image.public_id;
      }

      const artworkData: Artwork = {
        ...this.artwork,

        title: this.form.getRawValue().title,

        description: this.form.getRawValue().description,

        category: this.form.getRawValue().category,

        style: this.form.getRawValue().style,

        price: this.form.getRawValue().price,

        available: this.form.getRawValue().available,

        imageUrl,

        publicId,

        updatedAt: new Date(),

        createdAt: this.artwork?.createdAt ?? new Date(),

        currency: 'EUR',
      };

      if (this.artwork?.id) {
        await this.firestoreService.updateArtwork(
          this.artwork.id,

          artworkData,
        );

        await this.alertService.success('Obra creada', 'La obra se ha actualizado correctamente.');
      } else {
        await this.firestoreService.createArtwork(artworkData);

        await this.alertService.success('Obra creada', 'La obra se ha guardado correctamente.');
      }

      this.saved.emit();
      this.cancelEdit.emit();

      this.form.reset({
        available: true,
        price: 0,
      });

      this.preview = null;
      this.selectedFile = null;

      this.artwork = undefined;

      this.preview = null;

      this.selectedFile = null;
    } catch (error) {
      console.error(error);

      await this.alertService.error('Error', 'No se pudo guardar la obra. Inténtalo de nuevo.');
    } finally {
      this.loading = false;
    }
  }
}
