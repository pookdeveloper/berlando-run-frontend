export type PerformanceFeature = {
  name: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  images: string[];
  useCases: string[];
  description: string;
  productStory: string;
  materialStory: string;
  features: PerformanceFeature[];
  specs: ProductSpec[];
  reviews: {
    author: string;
    text: string;
    rating: number;
  }[];
  relatedSlugs: string[];
};

export type RunClub = {
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  schedule: string;
};

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};
