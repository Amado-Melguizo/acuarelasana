import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/services.data';
import { Service } from '../../models/service.model';

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

  readonly prices: Service[] = SERVICES
}
