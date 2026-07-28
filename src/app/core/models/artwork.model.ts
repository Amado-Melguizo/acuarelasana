export interface Artwork {

  id?: string;

  // Información
  title: string;
  description?: string;
  slug?: string;

  // Clasificación
  category: string;
  style?: string;
  technique?: string;
  tags?: string[];

  // Imagen principal
  imageUrl: string;
  publicId?: string;

  // Galería adicional
  gallery?: string[];

  // SEO
  alt?: string;

  // Medidas
  width?: number;
  height?: number;
  unit?: 'cm' | 'mm';

  // Precio
  price: number;
  currency: string;

  // Estado
  available: boolean;
  sold?: boolean;
  visible?: boolean;
  featured?: boolean;

  // Orden
  order?: number;

  // Fechas
  createdAt?: Date;
  updatedAt?: Date;
}