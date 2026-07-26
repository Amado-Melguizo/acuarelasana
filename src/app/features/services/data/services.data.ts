import { Service } from "../models/service.model";

const IMAGE_PATH = "assets/images/services";

export const SERVICES: Service[] = [

  {
    id: "portrait",

    title: "Retratos Personalizados",

    subtitle: "Personas",

    description:
      "Retratos únicos realizados en acuarela a partir de una fotografía.",

    icon: "bi-person-circle",

    image: `${IMAGE_PATH}/portrait.jpg`,

    startingPrice: 80
  },

  {
    id: "pets",

    title: "Retratos de Mascotas",

    subtitle: "Animales",

    description:
      "Convierte a tu mascota en una obra de arte realizada completamente a mano.",

    icon: "bi-heart",

    image: `${IMAGE_PATH}/pets.jpg`,

    startingPrice: 70
  },

  {
    id: "watercolor",

    title: "Acuarelas Personalizadas",

    subtitle: "Obras por encargo",

    description:
      "Creamos una ilustración totalmente personalizada según tu idea.",

    icon: "bi-palette",

    image: `${IMAGE_PATH}/watercolor.jpg`,

    startingPrice: 90
  },

  {
    id: "landscape",

    title: "Paisajes",

    subtitle: "Naturaleza",

    description:
      "Paisajes, ciudades y escenas especiales pintadas en acuarela.",

    icon: "bi-tree",

    image: `${IMAGE_PATH}/landscape.jpg`,

    startingPrice: 95
  },

  {
    id: "flowers",

    title: "Arte Botánico",

    subtitle: "Flores",

    description:
      "Ilustraciones botánicas con gran nivel de detalle.",

    icon: "bi-flower1",

    image: `${IMAGE_PATH}/flowers.jpg`,

    startingPrice: 75
  },

  {
    id: "charcoal",

    title: "Carboncillo",

    subtitle: "Blanco y negro",

    description:
      "Retratos realizados completamente a carboncillo.",

    icon: "bi-pencil",

    image: `${IMAGE_PATH}/charcoal.jpg`,

    startingPrice: 65
  }

];
