export interface Artwork {
  id: string;
  title: string;
  category: 'recent-works' | 'off-the-easel' | 'archive' | 'trompe-loeil';
  year?: number;
  dimensions: string;
  medium: string;
  price?: string;
  available: boolean;
  description?: string;
  imagePath: string;
  slug: string;
  featured?: boolean;
  tags?: string[];
}

export interface Gallery {
  id: string;
  name: string;
  slug: string;
  description: string;
  artworks: Artwork[];
  coverImage: string;
}

export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  type: 'solo' | 'group' | 'gallery' | 'fair';
  current?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  slug: string;
  published: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  artworkInterest?: string;
  phone?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}