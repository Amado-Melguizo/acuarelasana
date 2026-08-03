import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private readonly auth = inject(AuthService);

  private readonly router = inject(Router);

  loading = false;

  async login(): Promise<void> {

    this.loading = true;

    try {

      await this.auth.login();

      this.router.navigate(['/admin']);

    } catch (error) {

      console.error(error);

      alert('No tienes permisos para acceder.');

    } finally {

      this.loading = false;

    }

  }

}