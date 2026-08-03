import { GalleryCategory } from '../../../shared/interfaces/gallery-section.interface';
import { createGalleryImages } from '../utils/gallery-images.util';

const HOME_PATH = 'assets/images/gallery/home';

export const GALLERY_SECTIONS: GalleryCategory[] = [
  {
    id: 'botanica',
    title: 'Arte Botánico',
    description:
      'Colección de acuarelas inspiradas en flores y composiciones botánicas.',
    route: '/gallery/botanica',
    buttonText: 'Ver sección de Arte Botánico completa',

    homeImages: [
      {
        src: `${HOME_PATH}/botanica_1.jpg`,
        alt: 'Tulipanes Amarillos',
        title: 'Tulipanes Amarillos',
      },
      {
        src: `${HOME_PATH}/botanica_2.jpg`,
        alt: 'Composición Botánica',
        title: 'Composición Botánica',
      },
      {
        src: `${HOME_PATH}/botanica_3.jpg`,
        alt: 'Flores en Acuarela',
        title: 'Flores en Acuarela',
      },
    ],

    galleryImages: createGalleryImages('botanica', 'botanica', 27),
  },

  {
    id: 'mundo-animal',
    title: 'Arte Animal',
    description:
      'Colección de acuarelas inspiradas en el mundo animal.',
    route: '/gallery/mundo-animal',
    buttonText: 'Ver sección de Arte Animal completa',

    homeImages: [
      {
        src: `${HOME_PATH}/animales_1.jpg`,
        alt: 'Animal en Acuarela',
        title: 'Animal en Acuarela',
      },
      {
        src: `${HOME_PATH}/animales_2.jpg`,
        alt: 'Fauna Salvaje',
        title: 'Fauna Salvaje',
      },
      {
        src: `${HOME_PATH}/animales_3.jpg`,
        alt: 'Retrato Animal',
        title: 'Retrato Animal',
      },
    ],

    galleryImages: createGalleryImages('mundo-animal', 'animal', 7),
  },

  {
    id: 'paisajes-naturales',
    title: 'Paisajes Naturales',
    description:
      'Colección de acuarelas inspiradas en la naturaleza.',
    route: '/gallery/paisajes-naturales',
    buttonText: 'Ver sección de Paisajes Naturales completa',

    homeImages: [
      {
        src: `${HOME_PATH}/paisaje_1.jpg`,
        alt: 'Paisaje Natural',
        title: 'Paisaje Natural',
      },
      {
        src: `${HOME_PATH}/paisaje_2.jpg`,
        alt: 'Naturaleza',
        title: 'Naturaleza',
      },
      {
        src: `${HOME_PATH}/paisaje_3.jpg`,
        alt: 'Montañas',
        title: 'Montañas',
      },
    ],

    galleryImages: createGalleryImages(
      'paisajes-naturales',
      'naturaleza',
      5
    ),
  },

  {
    id: 'escenas-playa',
    title: 'Escenas de Playa',
    description:
      'Colección de paisajes costeros y playas.',

    route: '/gallery/escenas-playa',

    buttonText: 'Ver sección de Escenas de Playa completa',

    homeImages: [
      {
        src: `${HOME_PATH}/playa_1.jpg`,
        alt: 'Playa',
        title: 'Playa',
      },
      {
        src: `${HOME_PATH}/playa_2.jpg`,
        alt: 'Costa',
        title: 'Costa',
      },
      {
        src: `${HOME_PATH}/playa_3.jpg`,
        alt: 'Mar',
        title: 'Mar',
      },
    ],

    galleryImages: createGalleryImages(
      'escenas-playa',
      'escena_playa',
      11
    ),
  },

  {
    id: 'veleros',
    title: 'Veleros',
    description:
      'Colección de acuarelas dedicadas al mar y la navegación.',

    route: '/gallery/veleros',

    buttonText: 'Ver sección de Veleros completa',

    homeImages: [
      {
        src: `${HOME_PATH}/veleros_1.jpg`,
        alt: 'Velero',
        title: 'Velero',
      },
      {
        src: `${HOME_PATH}/veleros_2.jpg`,
        alt: 'Atardecer',
        title: 'Atardecer',
      },
      {
        src: `${HOME_PATH}/veleros_3.jpg`,
        alt: 'Mar',
        title: 'Mar',
      },
    ],

    galleryImages: createGalleryImages('veleros', 'velero', 14),
  },
];
