import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProtectedImageComponent } from "../../../shared/components/protected-image-component/protected-image-component";

@Component({
  selector: 'app-hero',
  imports: [RouterLink, ProtectedImageComponent],
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
