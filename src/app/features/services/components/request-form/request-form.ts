import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';

import { Artwork } from '../../../../core/models/artwork.model';
import { FirestoreService } from '../../../../core/services/firestore.service';
import { RequestService } from '../../../../core/services/request.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-form.html',
  styleUrl: './request-form.scss',
})
export class RequestForm implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);

  private readonly firestore = inject(FirestoreService);

  private readonly requestService = inject(RequestService);

  private readonly email = inject(EmailService);

  artworks = signal<Artwork[]>([]);

  private unsubscribe?: () => void;

  form = this.fb.group({
    name: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    phone: [''],

    service: ['', Validators.required],

    paintingSelection: [''],

    paintingTitle: [''],

    description: ['', Validators.required],

    style: [''],

    size: [''],

    budget: [0],

    deliveryDate: [''],
  });

  ngOnInit(): void {
    this.form.patchValue({
      service: this.requestService.selectedService(),

      paintingTitle: this.requestService.selectedPainting() || '',
    });

    this.unsubscribe = this.firestore.getArtworks((artworks) => {
      this.artworks.set(artworks.filter((a) => a.available));
      this.form.get('paintingSelection')?.valueChanges.subscribe(() => this.onPaintingChange());
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe?.();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    const value = this.form.getRawValue();

    const selectedArtwork = this.artworks().find(
      (artwork) => artwork.id === value.paintingSelection,
    );

    const payload = {
      ...value,

      paintingSelection: selectedArtwork?.title || '',
    };

    this.email
      .send(payload)

      .then(() => {
        Swal.fire({
          icon: 'success',

          title: 'Solicitud enviada',

          text: 'Nos pondremos en contacto contigo lo antes posible.',
        });

        this.form.reset();
      })

      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: 'error',

          title: 'Error',

          text: 'No se pudo enviar el formulario.',
        });
      });
  }
  onPaintingChange(): void {
    const id = this.form.get('paintingSelection')?.value;

    const artwork = this.artworks().find((a) => a.id === id);

    if (!artwork) {
      this.form.get('service')?.enable();
      this.form.get('paintingTitle')?.enable();

      this.form.patchValue({
        service: this.requestService.selectedService() || '',
        paintingTitle: this.requestService.selectedPainting() || '',
        description: '',
        style: '',
        budget: 0,
        size: '',
      });

      return;
    }

    // Bloquear campos que ya conocemos
    this.form.get('service')?.disable();
    this.form.get('paintingTitle')?.disable();

    this.form.patchValue({
      service: 'Información sobre una obra',

      paintingTitle: artwork.title,

      description: `Estoy interesado en adquirir la obra "${artwork.title}". Me gustaría recibir más información sobre disponibilidad, envío y proceso de compra.`,

      style: artwork.style || artwork.technique || '',

      budget: artwork.price,

      size:
        artwork.width && artwork.height
          ? `${artwork.width} x ${artwork.height} ${artwork.unit ?? 'cm'}`
          : '',
    });
  }
}
