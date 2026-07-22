import { Component } from '@angular/core';
import { ScrollTop } from "../../layouts/components/scroll-top/scroll-top";
import { Footer } from "../../layouts/components/footer/footer";
import { GalleryGridComponent } from "../../features/gallery/components/gallery-grid/gallery-grid";
import { Hero } from "../../layouts/components/hero/hero";
import { Header } from "../../layouts/components/header/header";

@Component({
  selector: 'app-home',
  imports: [ ScrollTop, Footer, GalleryGridComponent, Hero, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
