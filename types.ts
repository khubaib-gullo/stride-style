export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
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

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
}