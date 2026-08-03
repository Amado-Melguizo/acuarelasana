export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface GalleryCategory {
  id: string;

  title: string;

  description: string;

  route: string;
  buttonText: string;
  homeImages: GalleryImage[];

  galleryImages: GalleryImage[];
}
