import { Product, Collection, Testimonial, BlogPost } from './types';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Walk With Purpose",
    subtitle: "New Collection",
    description: "Experience the perfect fusion of street aesthetics and premium comfort.",
    bgImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop"
  }
];

export const FEATURED_COLLECTIONS: Collection[] = [
  {
    id: 1,
    title: "Urban Lux",
    subtitle: "Premium Streetwear",
    image: "https://images.unsplash.com/photo-1556906781-9a412961d289?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Eco-Stride",
    subtitle: "Sustainable Future",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Classic Reimagined",
    subtitle: "Timeless Silhouettes",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2000&auto=format&fit=crop"
  }
];

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Vanguard Elite",
    price: 245.00,
    category: "Urban Lux",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    title: "Forest Trekker",
    price: 189.00,
    category: "Eco-Stride",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    bestseller: true
  },
  {
    id: 3,
    title: "Midnight Runner",
    price: 210.00,
    category: "Performance",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    title: "Retro High '90",
    price: 155.00,
    category: "Classic Reimagined",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Shadow Knit",
    price: 175.00,
    category: "Performance",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop",
    bestseller: true
  },
  {
    id: 6,
    title: "Gold Accent",
    price: 299.00,
    category: "Urban Lux",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Creative Director",
    quote: "Stride & Style isn't just a brand, it's a statement. The quality of the Urban Lux line is unmatched in the market.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena Rossi",
    role: "Fashion Blogger",
    quote: "Finally, sustainable footwear that doesn't compromise on aesthetics. The Eco-Stride collection is brilliant.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "David Okafor",
    role: "Architect",
    quote: "Clean lines, premium materials, and comfort for days. These are the only shoes I wear to client meetings now.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];