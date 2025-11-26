import React from 'react';
import { X, Trash2, ArrowRight, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number, size: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[75] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="font-display font-black text-xl">YOUR CART ({cartItems.length})</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                   <ShoppingBag className="w-8 h-8 opacity-50" />
                </div>
                <p className="text-gray-500 font-medium">Your cart is empty.</p>
                <button onClick={onClose} className="text-black font-bold border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition">
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm uppercase">{item.title}</h4>
                        <span className="font-bold text-sm">${item.price}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Size: US {item.selectedSize}</p>
                      <p className="text-gray-500 text-xs">Color: {item.colors[0]}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200">
                        <button className="px-2 py-1 hover:bg-gray-50 text-xs font-bold">-</button>
                        <span className="px-2 text-xs font-medium">{item.quantity}</span>
                        <button className="px-2 py-1 hover:bg-gray-50 text-xs font-bold">+</button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id, item.selectedSize)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-4 mt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-all flex items-center justify-center gap-3">
                Checkout <Lock className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-2">
                <Lock className="w-3 h-3" /> Secure SSL Encryption
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

import { ShoppingBag } from 'lucide-react';
export default CartDrawer;