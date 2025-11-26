import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import Sidebar from './components/Sidebar';
import CartDrawer from './components/CartDrawer';
import { TRENDING_PRODUCTS } from './constants';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number, size: number) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-primary selection:bg-black selection:text-white">
      
      <Header 
        onOpenSidebar={() => setSidebarOpen(true)} 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      />

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
      />

      <main className="flex-grow w-full pt-[80px]">
        <Hero />
        
        <FeaturedCollections />

        <ProductGrid products={TRENDING_PRODUCTS} onAddToCart={addToCart} />

        <Testimonials />
      </main>

      <Footer />
      
      <GeminiChat />

    </div>
  );
};

export default App;