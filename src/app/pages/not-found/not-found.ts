import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColoringPicture } from './components/coloring-picture/coloring-picture';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    ColoringPicture
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {

}
