import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-dark/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-background z-50 transform transition-transform duration-300 ease-out border-r border-gray-200 shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <span className="font-display font-extrabold text-xl text-dark">MENU</span>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X className="w-6 h-6 text-dark" />
          </button>
        </div>

        <div className="p-6 h-full overflow-y-auto">
          <div className="text-primary text-xs font-bold uppercase tracking-widest mb-6">
             Explore
          </div>

          <ul className="space-y-2">
            {['New Arrivals', 'Collections', 'Men', 'Women', 'Accessories', 'Sustainability'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-dark font-bold hover:text-primary transition group border-b border-gray-100"
                >
                  {item}
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-12">
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-dark transition">My Account</a></li>
              <li><a href="#" className="hover:text-dark transition">Track Order</a></li>
              <li><a href="#" className="hover:text-dark transition">Stores</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;