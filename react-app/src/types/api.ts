// API response interfaces based on swagger.yaml

export interface Country {
  id: number;
  name: string;
  img: string;
  priority: number;
  url: string;
  slug: string;
  bus: { byn: number; usd: number };
  plane: { byn: number; usd: number };
}

export interface Hotel {
  id: number;
  name: string;
  stars?: number;
  country_id?: number;
  image?: string;
  description?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo?: string;
  url?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  url?: string;
  children?: MenuItem[];
}

export interface BestCountry {
  id: number;
  name: string;
  img?: string;
  slug?: string;
}

export interface BestHotel {
  id: number;
  name: string;
  stars?: number;
  image?: string;
  country?: string;
  price?: number;
}
