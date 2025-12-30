// API response interfaces based on swagger.yaml

export interface Country {
  id: number;
  name: string;
  img: string;
  priority: number;
  url: string;
  slug: string;
  bus: { byn: number, usd: number },
  plane: { byn: number, usd: number }
}

export interface Hotel {
  id: number;
  name: string;
  // Add other hotel properties as needed
}

export interface Partner {
  id: number;
  name: string;
  // Add other partner properties as needed
}

export interface MenuItem {
  id: number;
  name: string;
  url?: string;
  children?: MenuItem[];
  // Add other menu item properties as needed
}

export interface BestCountry {
  id: number;
  name: string;
  // Add other best country properties as needed
}

export interface BestHotel {
  id: number;
  name: string;
  // Add other best hotel properties as needed
}
