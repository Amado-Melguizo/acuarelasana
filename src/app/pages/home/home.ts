import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTop } from '../../layouts/components/scroll-top/scroll-top';
import { Footer } from '../../layouts/components/footer/footer';
import { GalleryGridComponent } from '../../features/gallery/components/gallery-grid/gallery-grid';
import { Hero } from '../../layouts/components/hero/hero';
import { Header } from '../../layouts/components/header/header';
import { Preloader } from '../../layouts/components/preloader/preloader';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ScrollTop,
    Footer,
    GalleryGridComponent,
    Hero,
    Header,
    Preloader
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  loading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 3000);

  }

}
