import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import Sidebar from './components/Sidebar';
import { TRENDING_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-dark selection:bg-primary selection:text-white">
      
      <Header onOpenSidebar={() => setSidebarOpen(true)} />

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <main className="flex-grow w-full">
        <Hero onOpenSidebar={() => setSidebarOpen(true)} />
        
        <FeaturedCollections />

        <ProductGrid products={TRENDING_PRODUCTS} />

        <Testimonials />
      </main>

      <Footer />
      
      <GeminiChat />

    </div>
  );
};

export default App;