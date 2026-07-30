import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceGuideI {

  title: string;

  description: string;

  price: string;

  icon: string;

  features: string[];

  popular?: boolean;

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
      description: 'Ideal para parejas, familiares o retratos individuales.',
      price: 'Desde 45 €',
      icon: 'bi-person-circle',
      features: [
        'Pintado completamente a mano',
        'Papel profesional',
        'Perfecto para regalar'
      ],
      popular: true
    },

    {
      title: 'Acuarela personalizada',
      description: 'Obras creadas exclusivamente para ti.',
      price: 'Desde 60 €',
      icon: 'bi-palette',
      features: [
        'Diseño exclusivo',
        'Colores de alta calidad',
        'Asesoramiento personalizado'
      ]
    },

    {
      title: 'Desde fotografía',
      description: 'Transforma un recuerdo en una obra única.',
      price: 'Desde 50 €',
      icon: 'bi-image',
      features: [
        'Máximo detalle',
        'Manteniendo la esencia',
        'Ideal para recuerdos'
      ]
    },

    {
      title: 'Carboncillo',
      description: 'Retratos clásicos en blanco y negro.',
      price: 'Desde 40 €',
      icon: 'bi-pencil',
      features: [
        'Técnica tradicional',
        'Gran contraste',
        'Acabado elegante'
      ]
    }

  ];

}
