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
