import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss'
})
export class ServicesList {
@Output()
serviceSelected = new EventEmitter<Service>();

selectService(service: Service) {
  this.serviceSelected.emit(service);
}
  readonly services: Service[] = [

  {
    id: 'portrait',

    title: 'Retratos personalizados',

    subtitle: 'Retratos únicos',

    description:
      'Retratos realizados completamente a mano a partir de una fotografía.',

    icon: 'bi-person-square',

    image: '',

    startingPrice: 60
  },

  {
    id: 'watercolor',

    title: 'Acuarelas personalizadas',

    subtitle: 'Obras únicas',

    description:
      'Ilustraciones originales creadas según la idea del cliente.',

    icon: 'bi-palette',

    image: '',

    startingPrice: 45
  },

  {
    id: 'photo',

    title: 'Acuarela desde fotografía',

    subtitle: 'Convierte un recuerdo en arte',

    description:
      'Transforma una fotografía especial en una acuarela única.',

    icon: 'bi-image',

    image: '',

    startingPrice: 55
  },

  {
    id: 'charcoal',

    title: 'Dibujo a carboncillo',

    subtitle: 'Carboncillo tradicional',

    description:
      'Obras realizadas completamente a mano en carboncillo.',

    icon: 'bi-pencil',

    image: '',

    startingPrice: 50
  }

];

}
