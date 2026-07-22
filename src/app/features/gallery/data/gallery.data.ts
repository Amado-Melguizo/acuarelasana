import { GallerySection } from '../../../shared/interfaces/gallery-section.interface';

export const GALLERY_SECTIONS: GallerySection[] = [

  {
    title: 'Arte Botánico',
    route: '/gallery/botanica',
    buttonText: 'Ver sección de Arte Botánico Completa',
    images: [
      {
        src: 'assets/images/gallery/home/botanica_1.jpg',
        alt: 'Tulipanes Amarillos',
        title: 'Tulipanes Amarillos'
      },
      {
        src: 'assets/images/gallery/home/botanica_2.jpg',
        alt: 'Flor 2',
        title: 'Flor 2'
      },
      {
        src: 'assets/images/gallery/home/botanica_3.jpg',
        alt: 'Flor 3',
        title: 'Flor 3'
      }
    ]
  },

  {
    title: 'Arte Animal',
    route: '/gallery/animales',
    buttonText: 'Ver sección completa',
    images: [
      {
        src: 'assets/images/gallery/home/animales_1.jpg',
        alt: 'Animal 1',
        title: 'Animal 1'
      },
      {
        src: 'assets/images/gallery/home/animales_2.jpg',
        alt: 'Animal 2',
        title: 'Animal 2'
      },
      {
        src: 'assets/images/gallery/home/animales_3.jpg',
        alt: 'Animal 3',
        title: 'Animal 3'
      }
    ]
  }

  // Después añadiremos Naturaleza,
  // Playa y Veleros exactamente igual.

];
