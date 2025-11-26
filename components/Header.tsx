import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

interface HeaderProps {
  onOpenSidebar: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onOpenSidebar, onOpenCart, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-gray-100 py-4 shadow-sm' 
          : 'bg-white border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button onClick={onOpenSidebar} className="lg:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full text-primary transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="text-2xl font-display font-black text-primary tracking-tighter">
              STRIDE<span className="text-gray-400">/</span>STYLE
            </a>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-wide text-primary">
            <a href="#" className="hover:text-gray-500 transition-colors">New Arrivals</a>
            <a href="#men" className="hover:text-gray-500 transition-colors">Men</a>
            <a href="#women" className="hover:text-gray-500 transition-colors">Women</a>
            <a href="#collections" className="hover:text-gray-500 transition-colors">Collections</a>
            <a href="#sale" className="text-red-600 hover:text-red-700 transition-colors">Sale</a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-1 md:gap-4 text-primary">
            
            {/* Expanded Search Bar for Desktop */}
            <div className={`hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-48'}`}>
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full text-primary placeholder-gray-500"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
              <User className="w-5 h-5" />
            </button>

            <button onClick={onOpenCart} className="p-2 hover:bg-gray-100 rounded-full relative group">
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-fade-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;