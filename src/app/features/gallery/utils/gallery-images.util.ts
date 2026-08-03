import { GalleryImage } from '../../../shared/interfaces/gallery-section.interface';

export function createGalleryImages(
  folder: string,
  prefix: string,
  total: number
): GalleryImage[] {
  return Array.from({ length: total }, (_, index) => ({
    src: `assets/images/gallery/${folder}/${prefix}_${index + 1}.jpg`,
    alt: `${prefix.replace('_', ' ')} ${index + 1}`,
    title: `${prefix.replace('_', ' ')} ${index + 1}`,
  }));
}
