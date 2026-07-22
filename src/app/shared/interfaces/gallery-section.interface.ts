export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface GallerySection {
  title: string;
  route: string;
  buttonText: string;
  images: GalleryImage[];
}
