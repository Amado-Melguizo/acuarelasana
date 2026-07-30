import { Service } from '../models/service.model';

const IMAGE_PATH = 'assets/images/services';

export const SERVICES: Service[] = [
  {
    id: 'portrait',
    title: 'Retratos personalizados',
    subtitle: 'Personas',
    description: 'Convierte un recuerdo inolvidable en una acuarela pintada completamente a mano.',
    icon: 'bi-person-circle',
    image: `${IMAGE_PATH}/portrait.jpg`,
    startingPrice: 80,
    badge: 'Más solicitado',
    features: ['Pintado a mano', 'Papel profesional', 'Ideal para regalo'],
  },

  {
    id: 'pets',
    title: 'Retratos de mascotas',
    subtitle: 'Animales',
    description: 'Captura la personalidad de tu compañero en una obra única.',
    icon: 'bi-heart',
    image: `${IMAGE_PATH}/pets.jpg`,
    startingPrice: 70,
    features: ['Todos los animales', 'Colores personalizados', 'Envío protegido'],
  },

  {
    id: 'watercolor',
    title: 'Acuarelas personalizadas',
    subtitle: 'Obras únicas',
    description: 'Creamos una ilustración exclusiva basada en tu idea.',
    icon: 'bi-palette',
    image: `${IMAGE_PATH}/watercolor.jpg`,
    startingPrice: 90,
    features: ['Diseño exclusivo', 'Proceso artesanal', 'Asesoramiento'],
  },

  {
    id: 'landscape',
    title: 'Paisajes',
    subtitle: 'Naturaleza',
    description: 'Escenas naturales y urbanas realizadas en acuarela.',
    icon: 'bi-tree',
    image: `${IMAGE_PATH}/landscape.jpg`,
    startingPrice: 95,
    features: ['Alta calidad', 'Gran formato', 'Acabado profesional'],
  },

  {
    id: 'flowers',
    title: 'Arte botánico',
    subtitle: 'Flores',
    description: 'Láminas botánicas con gran nivel de detalle.',
    icon: 'bi-flower1',
    image: `${IMAGE_PATH}/flowers.jpg`,
    startingPrice: 75,
    features: ['Flores favoritas', 'Colores vivos', 'Decoración'],
  },

  {
    id: 'charcoal',
    title: 'Carboncillo',
    subtitle: 'Blanco y negro',
    description: 'Retratos tradicionales realizados completamente a carboncillo.',
    icon: 'bi-pencil',
    image: `${IMAGE_PATH}/charcoal.jpg`,
    startingPrice: 65,
    features: ['Retrato clásico', 'Gran contraste', 'Hecho a mano'],
  },
];
