export type ArtworkOrder =
  | 'newest'
  | 'oldest'
  | 'titleAsc'
  | 'titleDesc'
  | 'priceAsc'
  | 'priceDesc'
  | 'categoryAsc';

export interface ArtworkFilter {

  order: ArtworkOrder;

  search: string;

  category: string;

  available: 'all' | 'available' | 'sold';

}