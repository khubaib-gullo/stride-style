import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Heart, ArrowRight } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section id="trending" className="py-24 bg-white px-4 md:px-8 rounded-t-[60px] md:rounded-t-[100px] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Shop The Look
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-dark mt-6">
            TRENDING <br className="md:hidden" /> ARRIVALS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div className="relative aspect-square bg-background mb-6 rounded-2xl overflow-hidden">
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase z-10">
                    New
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                   <button className="bg-white p-3 rounded-full text-dark hover:bg-primary hover:text-white transition shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                     <ShoppingBag className="w-5 h-5" />
                   </button>
                   <button className="bg-white p-3 rounded-full text-dark hover:bg-primary hover:text-white transition shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                     <Eye className="w-5 h-5" />
                   </button>
                </div>
              </div>

              {/* Details */}
              <div className="flex justify-between items-end border-b border-gray-100 pb-4 hover:border-dark transition-colors cursor-pointer">
                <div>
                  <h3 className="text-xl font-display font-bold text-dark mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {product.category}
                  </p>
                </div>
                <div className="text-lg font-bold text-primary">
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <button className="bg-transparent border-2 border-dark text-dark px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-all duration-300 flex items-center gap-3">
            Load More Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;