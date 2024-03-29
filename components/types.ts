export interface Data {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: any;
  votes: number;
  popular: boolean;
  available: boolean;
}

export interface MenuItem {
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  type: string | null;
  image: string | null;
}

export interface DrinkItem {
  id: string;
  name: string;
  description: string;
  hotprice: number;
  coldsmprice: number;
  coldlgprice: number;
  rating: number;
  votes: number;
  image: string;
  type: string;
}

export interface productSchema {
  id: string;
  product_id: string;
  cart_id: string;
  quantity: number;
  product_name: string;
  description: string;
  price: number;
  type: string;
  image: string;
}

export interface stripeProductSchema {
  id: string;
  object: string;
  active: boolean;
  created: Date;
  default_price: string | null;
  description: string | null;
  images: string[] | null;
  features: string[] | null;
  livemode: boolean;
  metadata: {};
  name: string;
  package_dimensions: string | null;
  shippable: string | null;
  statement_descritor: string | null;
  tax_code: string | null;
  unit_label: string | null;
  updated: Date;
  url: string | null;
}
