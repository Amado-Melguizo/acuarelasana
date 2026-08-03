import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Artwork } from '../../../../core/models/artwork.model';
import { FirestoreService } from '../../../../core/services/firestore.service';
import { ArtworkFilter } from '../../../../core/models/artwork.filter.model';

@Component({
  selector: 'app-artwork-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artwork-table.html',
  styleUrl: './artwork-table.scss',
})
export class ArtworkTable implements OnInit, OnDestroy {
  private readonly firestore = inject(FirestoreService);

  @Output()
  edit = new EventEmitter<Artwork>();
  artworks = signal<Artwork[]>([]);
  loading = signal(true);
  filter: ArtworkFilter = {
    order: 'newest',
    search: '',
    category: '',
    available: 'all',
  };

  private unsubscribe?: () => void;

  ngOnInit(): void {
    this.unsubscribe = this.firestore.getArtworks((artworks) => {
      this.artworks.set(artworks);
      this.loading.set(false);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe?.();
  }
  editArtwork(artwork: Artwork): void {
  this.edit.emit(artwork);
}
}
