import React from 'react';
import { FEATURED_COLLECTIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-4">
              Curated <span className="text-primary italic">Edits</span>
            </h2>
            <p className="text-gray-600 max-w-sm">
              Discover our seasonally curated collections designed for the modern urban aesthetic.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors mt-6 md:mt-0">
            View All Categories <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_COLLECTIONS.map((collection, index) => (
            <div key={collection.id} className="group cursor-pointer">
              {/* Arch Image Card */}
              <div className={`relative overflow-hidden mb-6 aspect-[4/5] ${index === 1 ? 'md:aspect-[3/4]' : ''}`}>
                 <div className="absolute inset-0 border border-dark/10 rounded-t-full transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                 <div className="absolute inset-0 bg-gray-100 rounded-t-full overflow-hidden shadow-sm">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {collection.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;