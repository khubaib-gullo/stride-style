import React from 'react';
import { Facebook, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-dark pt-24 pb-12 border-t border-dark/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-display font-black mb-6">
              STRIDE<span className="text-primary">.</span>STYLE
            </h2>
            <p className="text-gray-600 mb-8 max-w-sm text-lg">
              Redefining urban footwear with sustainable practices and avant-garde design.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border border-gray-200 px-6 py-4 rounded-full w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-dark text-white p-4 rounded-full hover:bg-primary transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-primary transition">All Products</a></li>
              <li><a href="#" className="hover:text-primary transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition">Sale</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-bold text-lg mb-6">Social</h4>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition">
                 <Twitter className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition">
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
          </div>
        </div>

        {/* Big Text Bottom */}
        <div className="border-t border-gray-200 pt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-10xl md:text-[12rem] font-display font-black text-gray-100 leading-none select-none pointer-events-none absolute left-0 bottom-0 -z-10 opacity-50 w-full text-center overflow-hidden">
             STRIDE
           </div>
           
           <p className="text-sm text-gray-500 font-medium">
             © 2024 Stride & Style Inc.
           </p>
           <div className="flex gap-8 text-sm text-gray-500 font-medium">
             <a href="#" className="hover:text-dark">Privacy Policy</a>
             <a href="#" className="hover:text-dark">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;