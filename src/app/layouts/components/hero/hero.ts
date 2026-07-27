import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() tag = '';

@Input() title = '';

@Input() subtitle = '';

@Input() description = '';

@Input() image = '';

@Input() primaryButton = '';

@Input() primaryLink = '';

@Input() secondaryButton = '';

@Input() secondaryLink = '';
}
