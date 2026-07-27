import { Component } from '@angular/core';
import { Header } from "../../layouts/components/header/header";
import { RouterLink } from '@angular/router';
import { Hero } from "../../layouts/components/hero/hero";

@Component({
  selector: 'app-about',
  imports: [Header, RouterLink, Hero],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
  