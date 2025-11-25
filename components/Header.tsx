import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button onClick={onOpenSidebar} className="p-2 hover:bg-black/5 rounded-full lg:hidden text-dark transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-2xl font-display font-extrabold text-dark tracking-tight">
              STRIDE<span className="text-primary">.</span>STYLE
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 font-sans font-semibold text-sm text-dark/80">
            <a href="#" className="hover:text-primary transition-colors">New Arrivals</a>
            <a href="#collections" className="hover:text-primary transition-colors">Collections</a>
            <a href="#trending" className="hover:text-primary transition-colors">Shop</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Journal</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 text-dark">
            <button className="p-2 hover:text-primary transition rounded-full hover:bg-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-primary transition rounded-full hover:bg-white hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-primary transition rounded-full hover:bg-white relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;