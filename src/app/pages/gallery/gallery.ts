import { Component, OnInit } from '@angular/core';
import { Preloader } from '../../layouts/components/preloader/preloader';
import { Header } from '../../layouts/components/header/header';
import { GalleryFilter } from '../../features/gallery/components/gallery-filter/gallery-filter';
import { Footer } from '../../layouts/components/footer/footer';
import { ScrollTop } from '../../layouts/components/scroll-top/scroll-top';
import { GalleryHero } from '../../layouts/components/gallery-hero/gallery-hero';
import { ActivatedRoute } from '@angular/router';
import { GALLERY_SECTIONS } from '../../features/gallery/data/gallery.data';
import { GalleryCategory } from '../../shared/interfaces/gallery-section.interface';
import { GalleryPageGrid } from "../../layouts/components/gallery-page-grid/gallery-page-grid";

@Component({
  selector: 'app-gallery',
  imports: [Preloader, Header, GalleryFilter, Footer, ScrollTop, GalleryHero, GalleryPageGrid],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit {

  section?: GalleryCategory;
loading: any;

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const category =
      this.route.snapshot.paramMap.get('category');

    this.section =
      GALLERY_SECTIONS.find(
        s => s.id === category
      );

  }

}
