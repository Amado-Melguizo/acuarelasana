import { ChatQuestion } from '../../app/core/models/chat-question.model';

export const CHAT_KNOWLEDGE: ChatQuestion[] = [
  // =====================================================
  // INFORMACIÓN GENERAL
  // =====================================================

  {
    id: 1,

    question: '¿Cómo puedo hacer un encargo?',

    keywords: [
      'pedido',
      'pedir',
      'encargo',
      'encargar',
      'comprar',
      'hacer pedido',
      'hacer encargo',
      'quiero una acuarela',
      'quiero comprar',
      'acuarela personalizada',
      'personalizado',
      'solicitar',
    ],

    answer:
      'Encargar una acuarela es muy sencillo. Solo tienes que acceder a la sección de Servicios, completar el formulario indicando qué deseas y, si dispones de una fotografía de referencia, adjuntarla. Antes de comenzar resolveré cualquier duda para asegurar que el resultado sea exactamente el que buscas.',

    actions: [
      {
        label: '🎨 Solicitar encargo',
        route: '/services',
        icon: '🎨',
      },
      {
        label: '📩 Contactar',
        route: '/contact',
        icon: '📩',
      },
    ],
  },

  {
    id: 2,

    question: '¿Qué tipo de acuarelas realizas?',

    keywords: [
      'acuarela',
      'acuarelas',
      'estilos',
      'arte',
      'dibujos',
      'ilustraciones',
      'retratos',
      'flores',
      'paisajes',
      'arquitectura',
      'animales',
      'mascotas',
    ],

    answer:
      'Realizo acuarelas totalmente personalizadas. Pinto retratos de personas, mascotas, flores, paisajes, arquitectura y cualquier ilustración basada en fotografías o ideas. Cada obra es única y está realizada completamente a mano.',

    actions: [
      {
        label: '🖼️ Ver galería',
        route: '/gallery/home',
        icon: '🖼️',
      },
    ],
  },

  {
    id: 3,

    question: '¿Quién es Ana?',

    keywords: ['quien eres', 'quien es ana', 'ana', 'artista', 'sobre ti', 'sobre ana'],

    answer:
      'Soy Ana, una artista especializada en acuarela. Mi objetivo es transformar fotografías y recuerdos en obras únicas realizadas completamente a mano con mucho cariño y dedicación.',

    actions: [
      {
        label: '👩 Conocer a Ana',
        route: '/about',
        icon: '👩',
      },
    ],
  },

  {
    id: 4,

    question: '¿Trabajas por encargo?',

    keywords: ['encargos', 'trabajas por encargo', 'pedido personalizado', 'hacer dibujo'],

    answer:
      'Sí. Todas las acuarelas personalizadas se realizan por encargo para adaptarlas completamente a cada cliente.',

    actions: [
      {
        label: '🎨 Encargar ahora',
        route: '/services',
        icon: '🎨',
      },
    ],
  },

  {
    id: 5,

    question: '¿Cuánto tarda un encargo?',

    keywords: ['tiempo', 'tarda', 'entrega', 'dias', 'plazo', 'espera'],

    answer:
      'El tiempo habitual de realización es de entre 7 y 15 días, dependiendo del tamaño de la obra y del número de encargos pendientes. Si necesitas una fecha concreta, intentaré adaptarme.',

    actions: [
      {
        label: '📅 Consultar disponibilidad',
        route: '/contact',
        icon: '📅',
      },
    ],
  },

  {
    id: 6,

    question: '¿Qué información necesitas?',

    keywords: ['que necesitas', 'informacion', 'datos', 'como empezar'],

    answer:
      'Normalmente solo necesito una fotografía de buena calidad y una breve explicación de cómo te gustaría la acuarela. A partir de ahí hablaremos sobre el tamaño y cualquier detalle especial.',

    actions: [
      {
        label: '📷 Enviar solicitud',
        route: '/services',
        icon: '📷',
      },
    ],
  },

  {
    id: 7,

    question: '¿Puedo personalizar completamente la obra?',

    keywords: ['personalizar', 'personalizado', 'cambiar', 'modificar', 'color', 'fondo'],

    answer:
      'Sí. Cada acuarela puede personalizarse completamente. Podemos modificar colores, fondos, composición y otros pequeños detalles para conseguir un resultado totalmente único.',

    actions: [
      {
        label: '✨ Personalizar',
        route: '/services',
        icon: '✨',
      },
    ],
  },

  {
    id: 8,

    question: '¿Puedo pedir varias acuarelas?',

    keywords: ['varias', 'muchas', 'mas de una', 'lote', 'pedido grande'],

    answer:
      'Por supuesto. Puedes solicitar varias acuarelas en un mismo pedido, ya sean para ti o para regalar.',

    actions: [
      {
        label: '🎨 Solicitar varias obras',
        route: '/services',
        icon: '🎨',
      },
    ],
  },

  {
    id: 9,

    question: '¿Cómo puedo contactar contigo?',

    keywords: ['contacto', 'correo', 'email', 'hablar', 'telefono', 'whatsapp'],

    answer:
      'Puedes utilizar el formulario de contacto disponible en la web. Intento responder lo antes posible para resolver cualquier duda o preparar tu encargo.',

    actions: [
      {
        label: '📩 Contactar',
        route: '/contact',
        icon: '📩',
      },
    ],
  },

  {
    id: 10,

    question: '¿Puedo ver algunos trabajos antes de pedir?',

    keywords: ['galeria', 'obras', 'trabajos', 'portfolio', 'ejemplos', 'acuarelas'],

    answer:
      'Sí. En la galería encontrarás una selección de mis acuarelas organizadas por categorías. Es una buena forma de inspirarte antes de realizar tu encargo.',

    actions: [
      {
        label: '🖼️ Abrir galería',
        route: '/gallery/home',
        icon: '🖼️',
      },
    ],
  },
  // =====================================================
// RETRATOS Y TEMÁTICAS
// =====================================================

{
  id: 11,

  question: '¿Realizas retratos de personas?',

  keywords: [
    'retrato',
    'persona',
    'personas',
    'humano',
    'cara',
    'rostro',
    'autorretrato',
    'familia',
    'retrato persona'
  ],

  answer:
    'Sí. Uno de mis trabajos favoritos son los retratos personalizados. A partir de una fotografía puedo convertir un recuerdo especial en una acuarela única y realizada completamente a mano.',

  actions: [
    {
      label: '🎨 Quiero un retrato',
      route: '/services',
      icon: '🎨'
    },
    {
      label: '🖼️ Ver galería',
      route: '/gallery/home',
      icon: '🖼️'
    }
  ]
},

{
  id: 12,

  question: '¿Pintas retratos de parejas?',

  keywords: [
    'pareja',
    'novios',
    'boda',
    'casados',
    'amor',
    'san valentin'
  ],

  answer:
    'Sí. Las acuarelas de pareja son uno de los regalos más especiales para aniversarios, bodas o San Valentín.',

  actions: [
    {
      label: '❤️ Encargar retrato',
      route: '/services',
      icon: '❤️'
    }
  ]
},

{
  id: 13,

  question: '¿Puedes pintar familias completas?',

  keywords: [
    'familia',
    'padres',
    'hijos',
    'niños',
    'grupo',
    'todos juntos'
  ],

  answer:
    'Claro. Puedo realizar retratos familiares completos, incluso combinando varias fotografías si es necesario para conseguir la composición deseada.',

  actions: [
    {
      label: '👨‍👩‍👧 Solicitar retrato',
      route: '/services',
      icon: '👨‍👩‍👧'
    }
  ]
},

{
  id: 14,

  question: '¿Realizas retratos de bebés?',

  keywords: [
    'bebé',
    'bebe',
    'recién nacido',
    'niño',
    'niña',
    'infantil'
  ],

  answer:
    'Sí. Los retratos infantiles son un recuerdo precioso para conservar momentos únicos de los más pequeños.',

  actions: [
    {
      label: '👶 Encargar acuarela',
      route: '/services',
      icon: '👶'
    }
  ]
},

{
  id: 15,

  question: '¿Haces retratos de mascotas?',

  keywords: [
    'mascota',
    'animal',
    'perro',
    'gato',
    'conejo',
    'hamster',
    'huron',
    'retrato mascota'
  ],

  answer:
    'Sí. Los retratos de mascotas son uno de los encargos más populares. Solo necesito una fotografía donde se aprecien bien sus detalles.',

  actions: [
    {
      label: '🐶 Ver ejemplos',
      route: '/gallery/mundo-animal',
      icon: '🐶'
    },
    {
      label: '🎨 Encargar mascota',
      route: '/services',
      icon: '🎨'
    }
  ]
},

{
  id: 16,

  question: '¿Puedes pintar perros?',

  keywords: [
    'perro',
    'labrador',
    'golden',
    'pastor alemán',
    'husky',
    'bulldog',
    'caniche',
    'chihuahua',
    'beagle',
    'border collie'
  ],

  answer:
    'Por supuesto. Cualquier raza puede convertirse en una acuarela personalizada llena de detalles y personalidad.',

  actions: [
    {
      label: '🐕 Mundo Animal',
      route: '/gallery/mundo-animal',
      icon: '🐕'
    }
  ]
},

{
  id: 17,

  question: '¿También pintas gatos?',

  keywords: [
    'gato',
    'gatos',
    'felino',
    'siamés',
    'persa',
    'maine coon'
  ],

  answer:
    'Sí. Los gatos también son protagonistas de muchas de mis acuarelas y cada uno mantiene su expresión y personalidad.',

  actions: [
    {
      label: '🐈 Ver galería',
      route: '/gallery/mundo-animal',
      icon: '🐈'
    }
  ]
},

{
  id: 18,

  question: '¿Realizas paisajes?',

  keywords: [
    'paisaje',
    'montaña',
    'bosque',
    'playa',
    'campo',
    'mar',
    'lago',
    'naturaleza',
    'atardecer'
  ],

  answer:
    'Sí. Pinto paisajes naturales y urbanos, intentando transmitir la atmósfera y la luz del lugar mediante la acuarela.',

  actions: [
    {
      label: '🌄 Ver paisajes',
      route: '/gallery/paisajes',
      icon: '🌄'
    }
  ]
},

{
  id: 19,

  question: '¿Pintas edificios o arquitectura?',

  keywords: [
    'arquitectura',
    'edificio',
    'casa',
    'iglesia',
    'castillo',
    'fachada',
    'monumento'
  ],

  answer:
    'Sí. También realizo ilustraciones arquitectónicas, viviendas familiares, edificios históricos y monumentos.',

  actions: [
    {
      label: '🏛️ Arquitectura',
      route: '/gallery/arquitectura',
      icon: '🏛️'
    }
  ]
},

{
  id: 20,

  question: '¿Puedo proponerte una idea diferente?',

  keywords: [
    'idea',
    'proyecto',
    'especial',
    'distinto',
    'personalizado',
    'algo diferente'
  ],

  answer:
    '¡Claro! Me encantan los proyectos originales. Si tienes una idea especial que no aparece en la galería, cuéntamela y estudiaremos juntos la mejor forma de convertirla en una acuarela.',

  actions: [
    {
      label: '💡 Contarte mi idea',
      route: '/contact',
      icon: '💡'
    },
    {
      label: '🎨 Solicitar encargo',
      route: '/services',
      icon: '🎨'
    }
  ]
},
// =====================================================
// GALERÍA Y COLECCIONES
// =====================================================

{
  id: 21,

  question: 'Quiero ver todas las acuarelas',

  keywords: [
    'galeria',
    'galería',
    'todas las obras',
    'portfolio',
    'portafolio',
    'trabajos',
    'ejemplos',
    'acuarelas',
    'ver obras',
    'mostrar galeria'
  ],

  answer:
    'En la galería encontrarás una selección de mis acuarelas organizadas por categorías. Es el mejor lugar para descubrir mi estilo y encontrar inspiración para tu próximo encargo.',

  actions: [
    {
      label: '🖼️ Abrir galería',
      route: '/gallery/home',
      icon: '🖼️'
    }
  ]
},

{
  id: 22,

  question: 'Quiero ver acuarelas de flores',

  keywords: [
    'flores',
    'flor',
    'botanica',
    'botánica',
    'rosa',
    'rosas',
    'girasol',
    'margarita',
    'lavanda',
    'orquidea',
    'orquídea',
    'tulipan',
    'tulipán'
  ],

  answer:
    'Las acuarelas botánicas destacan por su delicadeza y color. Puedes descubrir una colección dedicada exclusivamente al mundo floral.',

  actions: [
    {
      label: '🌸 Ver Botánica',
      route: '/gallery/botanica',
      icon: '🌸'
    }
  ]
},

{
  id: 23,

  question: 'Quiero ver animales',

  keywords: [
    'animales',
    'mascotas',
    'perros',
    'gatos',
    'caballos',
    'conejos',
    'aves',
    'fauna',
    'mundo animal'
  ],

  answer:
    'La colección Mundo Animal reúne retratos de mascotas y otros animales realizados completamente en acuarela.',

  actions: [
    {
      label: '🐶 Mundo Animal',
      route: '/gallery/mundo-animal',
      icon: '🐶'
    }
  ]
},

{
  id: 24,

  question: 'Quiero ver arquitectura',

  keywords: [
    'arquitectura',
    'edificios',
    'casas',
    'iglesias',
    'monumentos',
    'fachadas',
    'castillos'
  ],

  answer:
    'En esta colección encontrarás edificios, monumentos y construcciones convertidos en acuarelas llenas de detalle.',

  actions: [
    {
      label: '🏛️ Arquitectura',
      route: '/gallery/arquitectura',
      icon: '🏛️'
    }
  ]
},

{
  id: 25,

  question: 'Quiero ver paisajes',

  keywords: [
    'paisajes',
    'naturaleza',
    'bosques',
    'montañas',
    'playas',
    'campo',
    'mar',
    'lago',
    'río'
  ],

  answer:
    'Los paisajes transmiten tranquilidad y luz mediante la técnica de la acuarela. Descubre esta colección para inspirarte.',

  actions: [
    {
      label: '🌄 Paisajes',
      route: '/gallery/paisajes',
      icon: '🌄'
    }
  ]
},

{
  id: 26,

  question: '¿Cuál es la obra más popular?',

  keywords: [
    'popular',
    'favorita',
    'mejor',
    'mas bonita',
    'más bonita',
    'recomendada'
  ],

  answer:
    'Los retratos de mascotas y las acuarelas florales suelen ser las colecciones favoritas de quienes visitan la web. Si es tu primera visita, son un buen punto de partida.',

  actions: [
    {
      label: '🐶 Mundo Animal',
      route: '/gallery/mundo-animal',
      icon: '🐶'
    },
    {
      label: '🌸 Botánica',
      route: '/gallery/botanica',
      icon: '🌸'
    }
  ]
},

{
  id: 27,

  question: 'Busco ideas para un regalo',

  keywords: [
    'idea',
    'ideas',
    'regalo',
    'regalar',
    'sorpresa',
    'cumpleaños',
    'aniversario'
  ],

  answer:
    'Una acuarela personalizada es un regalo muy especial porque convierte un recuerdo en una obra única. Puedes inspirarte visitando la galería antes de realizar tu encargo.',

  actions: [
    {
      label: '🎁 Inspirarme',
      route: '/gallery/home',
      icon: '🎁'
    }
  ]
},

{
  id: 28,

  question: '¿Qué colección me recomiendas?',

  keywords: [
    'recomiendas',
    'recomendacion',
    'recomendación',
    'cual elegir',
    'qué ver'
  ],

  answer:
    'Si es tu primera visita, te recomiendo empezar por Mundo Animal y Botánica. Son dos de las colecciones más apreciadas por los visitantes.',

  actions: [
    {
      label: '🐶 Mundo Animal',
      route: '/gallery/mundo-animal',
      icon: '🐶'
    },
    {
      label: '🌸 Botánica',
      route: '/gallery/botanica',
      icon: '🌸'
    }
  ]
},

{
  id: 29,

  question: '¿Todas las obras son originales?',

  keywords: [
    'original',
    'originales',
    'hechas a mano',
    'manual',
    'artesanal',
    'autenticas',
    'auténticas'
  ],

  answer:
    'Sí. Todas las acuarelas están realizadas completamente a mano utilizando materiales de calidad. Cada obra es única y no existen dos exactamente iguales.'
},

{
  id: 30,

  question: 'Quiero encargar una obra parecida a una de la galería',

  keywords: [
    'parecida',
    'similar',
    'como esta',
    'igual',
    'inspirada',
    'esta acuarela'
  ],

  answer:
    'Sin problema. Las obras de la galería pueden servir como inspiración para crear una nueva acuarela totalmente personalizada y adaptada a tu idea.',

  actions: [
    {
      label: '🎨 Solicitar encargo',
      route: '/services',
      icon: '🎨'
    },
    {
      label: '📩 Consultar',
      route: '/contact',
      icon: '📩'
    }
  ]
},
// =====================================================
// PRECIOS, PAGOS Y ENVÍOS
// =====================================================

{
  id: 31,

  question: '¿Cuánto cuesta una acuarela?',

  keywords: [
    'precio',
    'coste',
    'cuanto cuesta',
    'vale',
    'presupuesto',
    'tarifa',
    'dinero'
  ],

  answer:
    'Cada acuarela es completamente personalizada, por lo que el precio depende del tamaño, la complejidad y el número de elementos que aparezcan en la obra. Estaré encantada de prepararte un presupuesto sin compromiso.',

  actions: [
    {
      label: '💰 Solicitar presupuesto',
      route: '/services',
      icon: '💰'
    },
    {
      label: '📩 Contactar',
      route: '/contact',
      icon: '📩'
    }
  ]
},

{
  id: 32,

  question: '¿El presupuesto es gratuito?',

  keywords: [
    'presupuesto gratis',
    'presupuesto gratuito',
    'sin compromiso',
    'precio aproximado'
  ],

  answer:
    'Sí. Puedes solicitar un presupuesto totalmente gratuito y sin compromiso. Una vez conozca tu idea, te indicaré el precio antes de comenzar el trabajo.',

  actions: [
    {
      label: '📝 Pedir presupuesto',
      route: '/services',
      icon: '📝'
    }
  ]
},

{
  id: 33,

  question: '¿Qué tamaños están disponibles?',

  keywords: [
    'tamaño',
    'medidas',
    'a5',
    'a4',
    'a3',
    'grande',
    'pequeño',
    'papel'
  ],

  answer:
    'Trabajo en diferentes tamaños para adaptarme a cada proyecto. Si buscas unas medidas concretas, indícamelas y prepararé la mejor opción para ti.',

  actions: [
    {
      label: '📐 Consultar tamaños',
      route: '/contact',
      icon: '📐'
    }
  ]
},

{
  id: 34,

  question: '¿Qué métodos de pago aceptas?',

  keywords: [
    'pagar',
    'bizum',
    'transferencia',
    'metodo pago',
    'forma pago'
  ],

  answer:
    'Actualmente acepto pagos mediante Bizum y transferencia bancaria. Si necesitas otro método, puedes consultármelo y veremos si es posible adaptarnos.',

  actions: [
    {
      label: '💳 Consultar pago',
      route: '/contact',
      icon: '💳'
    }
  ]
},

{
  id: 35,

  question: '¿Hay que pagar antes de empezar?',

  keywords: [
    'adelanto',
    'reserva',
    'pagar antes',
    'primer pago',
    'anticipo'
  ],

  answer:
    'Dependiendo del tipo de encargo puede solicitarse una señal para reservar la realización de la obra. Todos los detalles se explicarán antes de comenzar el trabajo.',

  actions: [
    {
      label: '📩 Consultar condiciones',
      route: '/contact',
      icon: '📩'
    }
  ]
},

{
  id: 36,

  question: '¿Realizas envíos?',

  keywords: [
    'envio',
    'enviar',
    'mensajeria',
    'correo',
    'transportista',
    'paquete'
  ],

  answer:
    'Sí. Todas las acuarelas se envían cuidadosamente protegidas para garantizar que lleguen en perfecto estado.',

  actions: [
    {
      label: '📦 Información de envío',
      route: '/contact',
      icon: '📦'
    }
  ]
},

{
  id: 37,

  question: '¿Envías a toda España?',

  keywords: [
    'españa',
    'peninsula',
    'canarias',
    'baleares',
    'ceuta',
    'melilla'
  ],

  answer:
    'Sí. Realizo envíos a cualquier punto de España. Si tienes alguna necesidad especial, no dudes en consultarme.',

  actions: [
    {
      label: '🚚 Consultar envío',
      route: '/contact',
      icon: '🚚'
    }
  ]
},

{
  id: 38,

  question: '¿Realizas envíos internacionales?',

  keywords: [
    'internacional',
    'extranjero',
    'fuera de españa',
    'europa',
    'otro pais'
  ],

  answer:
    'Dependiendo del destino, también es posible realizar envíos internacionales. Contacta conmigo para estudiar las opciones disponibles.',

  actions: [
    {
      label: '🌍 Consultar destino',
      route: '/contact',
      icon: '🌍'
    }
  ]
},

{
  id: 39,

  question: '¿Cómo proteges la acuarela durante el envío?',

  keywords: [
    'embalaje',
    'proteccion',
    'proteger',
    'doblada',
    'rota',
    'seguridad'
  ],

  answer:
    'Cada obra se prepara cuidadosamente utilizando materiales de protección adecuados para evitar daños durante el transporte. Mi objetivo es que llegue exactamente igual que salió del estudio.'
},

{
  id: 40,

  question: '¿La acuarela va firmada?',

  keywords: [
    'firma',
    'firmada',
    'autor',
    'autenticidad',
    'original'
  ],

  answer:
    'Sí. Todas las obras originales van firmadas como garantía de autenticidad y forman parte de un trabajo artístico completamente realizado a mano.'
},
// =====================================================
// FOTOGRAFÍAS Y PERSONALIZACIÓN
// =====================================================

{
  id: 41,

  question: '¿Cómo debe ser la fotografía?',

  keywords: [
    'fotografia',
    'foto',
    'imagen',
    'calidad',
    'resolucion',
    'nitida',
    'enfocada'
  ],

  answer:
    'Lo ideal es que la fotografía tenga buena iluminación, esté enfocada y conserve el mayor número posible de detalles. Cuanta mejor sea la imagen, mayor será la fidelidad de la acuarela.',

  actions: [
    {
      label: '📸 Enviar fotografía',
      route: '/services',
      icon: '📸'
    }
  ]
},

{
  id: 42,

  question: '¿Puedo enviar varias fotografías?',

  keywords: [
    'varias fotos',
    'dos fotos',
    'muchas fotos',
    'imagenes',
    'referencias'
  ],

  answer:
    'Sí. Puedes enviarme varias fotografías para que pueda escoger la mejor referencia o incluso combinar elementos entre ellas.',

  actions: [
    {
      label: '🖼️ Solicitar encargo',
      route: '/services',
      icon: '🖼️'
    }
  ]
},

{
  id: 43,

  question: '¿Puedes unir personas de distintas fotografías?',

  keywords: [
    'unir',
    'combinar',
    'fusionar',
    'dos personas',
    'varias personas',
    'montaje'
  ],

  answer:
    'Sí. Si las personas no aparecen juntas en una misma fotografía, puedo crear una composición uniendo distintas imágenes para conseguir el resultado deseado.'
},

{
  id: 44,

  question: '¿Puedes eliminar personas u objetos?',

  keywords: [
    'eliminar',
    'quitar',
    'borrar',
    'objeto',
    'persona',
    'fondo'
  ],

  answer:
    'Sí. Es posible eliminar personas, objetos o elementos que no quieras que aparezcan en la acuarela, siempre que la composición lo permita.'
},

{
  id: 45,

  question: '¿Puedes cambiar el fondo?',

  keywords: [
    'fondo',
    'paisaje',
    'cambiar fondo',
    'nuevo fondo',
    'escenario'
  ],

  answer:
    'Sí. El fondo puede modificarse completamente o incluso sustituirse por uno nuevo que encaje mejor con la obra.'
},

{
  id: 46,

  question: '¿Puedes cambiar colores o ropa?',

  keywords: [
    'ropa',
    'color',
    'vestido',
    'camiseta',
    'chaqueta',
    'vestimenta'
  ],

  answer:
    'Sí. Podemos adaptar colores, prendas o pequeños detalles para que la ilustración represente exactamente la idea que tienes en mente.'
},

{
  id: 47,

  question: '¿Puedes modificar una expresión facial?',

  keywords: [
    'sonrisa',
    'expresion',
    'cara',
    'rostro',
    'feliz',
    'mirada'
  ],

  answer:
    'En muchos casos sí. Si la fotografía lo permite, puedo realizar pequeños ajustes para conseguir una expresión más natural o acorde a la composición.'
},

{
  id: 48,

  question: '¿Puedo añadir una dedicatoria?',

  keywords: [
    'dedicatoria',
    'mensaje',
    'texto',
    'frase',
    'nombre',
    'fecha'
  ],

  answer:
    'Claro. Puedes incluir nombres, fechas o una dedicatoria especial para hacer la acuarela todavía más personal.'
},

{
  id: 49,

  question: 'Quiero hacer un regalo sorpresa',

  keywords: [
    'regalo sorpresa',
    'sorpresa',
    'no decir',
    'regalar',
    'oculto'
  ],

  answer:
    'Las acuarelas personalizadas son perfectas para sorprender a alguien. Si se trata de un regalo, podemos organizar los plazos para que llegue a tiempo.',

  actions: [
    {
      label: '🎁 Preparar regalo',
      route: '/services',
      icon: '🎁'
    }
  ]
},

{
  id: 50,

  question: '¿Puedo pedir una acuarela para una boda o aniversario?',

  keywords: [
    'boda',
    'aniversario',
    'novios',
    'casamiento',
    'celebracion',
    'regalo boda'
  ],

  answer:
    'Por supuesto. Muchas acuarelas se realizan para bodas, aniversarios, cumpleaños y otras ocasiones especiales. Es un recuerdo único que conserva un momento importante para siempre.',

  actions: [
    {
      label: '💍 Solicitar encargo',
      route: '/services',
      icon: '💍'
    }
  ]
},
// =====================================================
// SOBRE ANA, MATERIALES Y EXPERIENCIA
// =====================================================

{
  id: 51,

  question: '¿Quién es Ana?',

  keywords: [
    'ana',
    'artista',
    'quien eres',
    'autora',
    'pintora',
    'sobre ti'
  ],

  answer:
    'Soy Ana, artista especializada en acuarela. Mi objetivo es transformar recuerdos y emociones en obras únicas realizadas completamente a mano. Cada encargo recibe el mismo cuidado y dedicación, independientemente de su tamaño.',

  actions: [
    {
      label: '👩‍🎨 Conocer a Ana',
      route: '/about',
      icon: '👩‍🎨'
    }
  ]
},

{
  id: 52,

  question: '¿Qué materiales utilizas?',

  keywords: [
    'materiales',
    'papel',
    'acuarelas',
    'pigmentos',
    'pinceles',
    'calidad'
  ],

  answer:
    'Trabajo con materiales de calidad artística para garantizar un buen acabado y una excelente conservación de cada obra a lo largo del tiempo.'
},

{
  id: 53,

  question: '¿Las acuarelas están hechas a mano?',

  keywords: [
    'mano',
    'hechas a mano',
    'manual',
    'digital',
    'ia',
    'inteligencia artificial'
  ],

  answer:
    'Sí. Todas las obras están pintadas completamente a mano. No utilizo inteligencia artificial ni impresiones para crear las acuarelas.'
},

{
  id: 54,

  question: '¿Cómo debo cuidar mi acuarela?',

  keywords: [
    'cuidar',
    'conservar',
    'humedad',
    'sol',
    'proteger',
    'mantenimiento'
  ],

  answer:
    'Se recomienda mantener la acuarela alejada de la humedad y de la luz solar directa. Enmarcarla con cristal ayudará a conservar sus colores durante muchos años.'
},

{
  id: 55,

  question: '¿Puedo enmarcar la acuarela?',

  keywords: [
    'marco',
    'enmarcar',
    'cuadro',
    'cristal',
    'decoracion'
  ],

  answer:
    'Sí. De hecho, es la mejor forma de protegerla y lucirla. Un buen marco realzará todavía más la obra.'
},

{
  id: 56,

  question: '¿Aceptas nuevos encargos?',

  keywords: [
    'disponibilidad',
    'agenda',
    'encargos',
    'aceptas pedidos',
    'puedo encargar'
  ],

  answer:
    'Siempre que mi agenda lo permita estaré encantada de aceptar nuevos proyectos. Puedes escribirme y te informaré de la disponibilidad actual.',

  actions: [
    {
      label: '📅 Consultar disponibilidad',
      route: '/contact',
      icon: '📅'
    }
  ]
},

{
  id: 57,

  question: '¿Mis fotografías son privadas?',

  keywords: [
    'privacidad',
    'datos',
    'fotografias',
    'imagenes',
    'seguridad',
    'confidencial'
  ],

  answer:
    'Sí. Las fotografías que envíes únicamente se utilizarán para preparar tu acuarela y trataré toda la información con la máxima privacidad.'
},

{
  id: 58,

  question: '¿Por qué elegir una acuarela personalizada?',

  keywords: [
    'porque',
    'por que',
    'merece la pena',
    'ventajas',
    'regalo especial'
  ],

  answer:
    'Una acuarela personalizada convierte un recuerdo en una obra irrepetible. Es un regalo muy emotivo y una forma diferente de conservar momentos importantes para siempre.'
},

{
  id: 59,

  question: 'Todavía tengo dudas',

  keywords: [
    'mas dudas',
    'más dudas',
    'ayuda',
    'consulta',
    'preguntar',
    'hablar contigo'
  ],

  answer:
    'No te preocupes. Si no has encontrado la respuesta que buscabas, puedes escribirme directamente y responderé personalmente a todas tus preguntas.',

  actions: [
    {
      label: '📩 Contactar con Ana',
      route: '/contact',
      icon: '📩'
    }
  ]
},

{
  id: 60,

  question: 'Gracias por la ayuda',

  keywords: [
    'gracias',
    'muchas gracias',
    'perfecto',
    'ok',
    'vale',
    'adios',
    'adiós',
    'hasta luego'
  ],

  answer:
    '😊 ¡Ha sido un placer ayudarte! Espero que disfrutes visitando la galería. Si decides encargar una acuarela o necesitas cualquier información adicional, estaré encantada de atenderte. ¡Que tengas un maravilloso día!',

  actions: [
    {
      label: '🖼️ Ver galería',
      route: '/gallery/home',
      icon: '🖼️'
    },
    {
      label: '🎨 Solicitar encargo',
      route: '/services',
      icon: '🎨'
    }
  ]
},
];
