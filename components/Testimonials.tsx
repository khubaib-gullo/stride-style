import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark overflow-hidden text-white">
      {/* Marquee Effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((_, i) => (
             <div key={i} className="flex items-center gap-8 mx-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
               <span className="text-6xl md:text-8xl font-display font-black stroke-text">
                 STRIDE & STYLE
               </span>
               <Star className="w-8 h-8 text-primary fill-current" />
             </div>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        .stroke-text:hover {
          color: white;
          -webkit-text-stroke: 0px;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto text-center mt-20 px-6">
        <div className="mb-8 flex justify-center gap-1">
           {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-primary fill-current" />)}
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
          "The perfect blend of urban aesthetics and uncompromising comfort. A true game changer."
        </h3>
        <p className="text-gray-400 font-sans tracking-widest uppercase text-sm">
          — Marcus Chen, Creative Director
        </p>
      </div>
    </section>
  );
};

export default Testimonials;