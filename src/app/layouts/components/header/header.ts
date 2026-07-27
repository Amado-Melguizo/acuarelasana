import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  mobileMenuOpen = false;

  galleryOpen = false;

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
