export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
  isNew?: boolean;
  bestseller?: boolean;
  sizes: number[];
  colors: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  description: string;
}

export interface Collection {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CartItem extends Product {
  selectedSize: number;
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}