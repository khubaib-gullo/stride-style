import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, X, Check, Heart, ArrowRight, Filter, ChevronDown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product, size: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  // Filters State (Visual only for now)
  const [filtersOpen, setFiltersOpen] = useState(false);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    setSelectedSize(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      setIsAdding(true);
      setTimeout(() => {
        onAddToCart(selectedProduct, selectedSize);
        setIsAdding(false);
        setSelectedProduct(null); // Close modal after add
      }, 800);
    }
  };

  return (
    <section id="shop" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-black text-primary mb-2">SHOP ALL</h2>
            <p className="text-gray-500 text-sm">Showing {products.length} results</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <button 
               onClick={() => setFiltersOpen(!filtersOpen)}
               className="flex items-center gap-2 border border-gray-200 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:border-black transition w-full md:w-auto justify-center"
             >
               <Filter className="w-4 h-4" /> Filters
             </button>
             <div className="relative group w-full md:w-auto">
               <button className="flex items-center justify-between gap-2 border border-gray-200 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:border-black transition w-full md:w-48">
                 Sort By <ChevronDown className="w-4 h-4" />
               </button>
               {/* Dropdown Mockup */}
             </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters (Desktop) */}
          <div className={`hidden lg:block w-64 space-y-8 flex-shrink-0 transition-all ${filtersOpen ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
             <div>
               <h3 className="font-bold text-sm uppercase mb-4">Category</h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"><Check className="w-3 h-3 opacity-0" /></div> Running</li>
                 <li className="flex items-center gap-2"><div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"><Check className="w-3 h-3 opacity-0" /></div> Lifestyle</li>
                 <li className="flex items-center gap-2"><div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"><Check className="w-3 h-3 opacity-0" /></div> Training</li>
               </ul>
             </div>
             <div>
               <h3 className="font-bold text-sm uppercase mb-4">Size</h3>
               <div className="grid grid-cols-4 gap-2">
                 {[7, 8, 9, 10, 11, 12].map(s => (
                   <button key={s} className="border border-gray-200 py-2 text-xs hover:border-black">{s}</button>
                 ))}
               </div>
             </div>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => openProduct(product)}>
                {/* Image Card */}
                <div className="relative aspect-[3/4] bg-light mb-4 overflow-hidden">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                      New In
                    </span>
                  )}
                  {product.stockStatus === 'Low Stock' && (
                    <span className="absolute top-3 right-3 text-red-600 text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                      Low Stock
                    </span>
                  )}
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Image */}
                  <img 
                    src={product.images[1] || product.images[0]} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Quick Add Button Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white/90 backdrop-blur text-primary py-3 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-primary text-lg">{product.title}</h3>
                    <span className="text-sm font-medium">${product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{product.category} • {product.colors.length} Colors</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal (PDP) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="bg-white w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto rounded-none md:grid md:grid-cols-2 relative shadow-2xl animate-fade-in">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Gallery Section */}
            <div className="bg-light p-4 grid grid-cols-2 gap-2 h-full content-start">
              {selectedProduct.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`View ${idx}`}
                  className={`w-full object-cover cursor-pointer hover:opacity-90 transition ${idx === 0 ? 'col-span-2 aspect-square' : 'aspect-square'}`}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">{selectedProduct.category}</span>
                   {selectedProduct.stockStatus !== 'In Stock' && (
                     <span className="text-red-600 text-xs font-bold uppercase">{selectedProduct.stockStatus}</span>
                   )}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-black mb-4">{selectedProduct.title}</h2>
                <p className="text-2xl font-medium mb-8">${selectedProduct.price}</p>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Select Size (US)</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        disabled={selectedProduct.stockStatus === 'Out of Stock'}
                        className={`w-12 h-12 flex items-center justify-center text-sm font-bold border transition-all
                          ${selectedSize === size 
                            ? 'bg-black text-white border-black' 
                            : 'bg-transparent text-black border-gray-200 hover:border-black'
                          }
                          ${selectedProduct.stockStatus === 'Out of Stock' ? 'opacity-50 cursor-not-allowed decoration-slice' : ''}
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {selectedProduct.sizes.length > 0 && !selectedSize && (
                    <p className="text-red-500 text-xs mt-2">Please select a size</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button 
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 py-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all
                    ${!selectedSize 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                    }
                  `}
                >
                  {isAdding ? (
                    <span className="animate-pulse">Adding...</span>
                  ) : (
                    <>
                      Add to Cart <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <button className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;