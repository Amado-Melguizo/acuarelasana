import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';

import { RequestService } from '../../../../core/services/request.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-form.html',
  styleUrl: './request-form.scss'
})
export class RequestForm implements OnInit {

  form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly requestService: RequestService,
    private readonly email: EmailService
  ) {

    this.form = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phone: [''],

      service: ['', Validators.required],

      paintingTitle: [''],

      description: ['', Validators.required],

      style: [''],

      size: [''],

      budget: [''],

      deliveryDate: ['']

    });

  }

  ngOnInit(): void {

    this.form.patchValue({

      service: this.requestService.selectedService(),

      paintingTitle: this.requestService.selectedPainting()

    });

  }

 submit() {

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.email.send(this.form.getRawValue())

    .then(() => {

      Swal.fire({
        icon: 'success',
        title: 'Solicitud enviada',
        text: 'Nos pondremos en contacto contigo lo antes posible.'
      });

      this.form.reset();

    })

    .catch((error) => {

      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el formulario.'
      });

    });

}

}
