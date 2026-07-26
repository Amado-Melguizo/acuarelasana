import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceGuideI {

  title: string;

  description: string;

  price: string;

}

@Component({
  selector: 'app-price-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-guide.html',
  styleUrl: './price-guide.scss'
})
export class PriceGuide {

  readonly prices: PriceGuideI[] = [

    {
      title: 'Retrato personalizado',
      description:
        'Retrato realizado a mano a partir de una fotografía.',
      price: 'Desde 45 €'
    },

    {
      title: 'Acuarela personalizada',
      description:
        'Obra completamente diseñada según la idea del cliente.',
      price: 'Desde 60 €'
    },

    {
      title: 'Acuarela desde fotografía',
      description:
        'Conversión artística de una fotografía.',
      price: 'Desde 50 €'
    },

    {
      title: 'Dibujo a carboncillo',
      description:
        'Retratos y composiciones en carboncillo.',
      price: 'Desde 40 €'
    }

  ];

}
