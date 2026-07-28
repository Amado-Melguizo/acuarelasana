import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { AlertService } from '../../../core/services/alert.services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  mobileMenuOpen = false;
  galleryOpen = false;
  userMenuOpen = false;
  logged = false;
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly alert = inject(AlertService);
  ngOnInit(): void {
    this.auth.authState((user) => {
      this.logged = !!user;
    });
  }
  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  closeUserMenu() {
    this.userMenuOpen = false;
  }
  async login() {
    try {
      await this.auth.login();

      await this.alert.toastSuccess('Sesión iniciada correctamente');
    } catch {
      await this.alert.error(
        'Acceso denegado',
        'No tienes permisos para acceder al panel de administración.',
      );

      this.router.navigate(['/']);
    }
  }
  async logout() {
    await this.auth.logout();

    this.userMenuOpen = false;

    await this.alert.toastSuccess('Sesión cerrada correctamente');

    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return this.logged;
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if (!this.mobileMenuOpen) {
      this.galleryOpen = false;
    }
  }

  closeMenu() {
    this.mobileMenuOpen = false;
    this.galleryOpen = false;
  }

  toggleGallery() {
    this.galleryOpen = !this.galleryOpen;
  }
}
