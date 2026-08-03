import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { EmailService } from '../../features/services/services/email.service';
import { Footer } from '../../layouts/components/footer/footer';
import { ScrollTop } from '../../layouts/components/scroll-top/scroll-top';
import { Preloader } from '../../layouts/components/preloader/preloader';
import { Hero } from '../../layouts/components/hero/hero';
import { Header } from '../../layouts/components/header/header';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Footer, ScrollTop, Preloader, Hero, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form;
  constructor(
    private readonly fb: FormBuilder,
    private readonly email: EmailService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      subject: ['', Validators.required],

      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    this.email
      .send(this.form.getRawValue())

      .then(() => {
        Swal.fire({
          icon: 'success',

          title: 'Mensaje enviado',

          text: 'Gracias por contactar conmigo.',
        });

        this.form.reset();
      })

      .catch(() => {
        Swal.fire({
          icon: 'error',

          title: 'Ha ocurrido un error',

          text: 'Inténtalo de nuevo más tarde.',
        });
      });
  }
}
