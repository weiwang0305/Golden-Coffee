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
  name: string;
  description: string;
  price: number;
  type: string;
}
