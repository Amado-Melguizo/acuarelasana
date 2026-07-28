import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { Artwork } from '../../../../core/models/artwork.model';
import { FirestoreService } from '../../../../core/services/firestore.service';
import { ArtworkForm } from '../../components/artwork-form/artwork-form';
import { ArtworkTable } from '../../components/artwork-table/artwork-table';
import { Footer } from '../../../../layouts/components/footer/footer';
import { Header } from '../../../../layouts/components/header/header';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { AlertService } from '../../../../core/services/alert.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [ArtworkForm, ArtworkTable, Footer, Header],
})
export class Dashboard implements OnInit, OnDestroy {
  selectedArtwork?: Artwork;
  total = 0;

  available = 0;

  sold = 0;

  private unsubscribe?: () => void;
  private readonly firestore = inject(FirestoreService);
  private readonly auth = inject(AuthService);
  private readonly alertService = inject(AlertService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.unsubscribe = this.firestore.getArtworks((artworks: Artwork[]) => {
      this.total = artworks.length;

      this.available = artworks.filter((a) => a.available).length;

      this.sold = artworks.filter((a) => !a.available).length;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe?.();
  }
  onEditArtwork(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }
  async logout(): Promise<void> {
    await this.auth.logout();
    
    await this.alertService.toastSuccess('Sesión cerrada correctamente');
    this.router.navigate(['/']);
  }
}
