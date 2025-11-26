import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const slide = HERO_SLIDES[0];

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-primary overflow-hidden">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src={slide.bgImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl animate-slide-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white text-black text-xs font-bold tracking-widest uppercase">
              New Drop
            </span>
            <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
              Limited Edition
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6">
            {slide.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10">
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
              Shop Men <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
              Shop Women
            </button>
          </div>
        </div>
      </div>

      {/* Video Trigger (Visual Only) */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:flex items-center gap-3 cursor-pointer group">
        <div className="text-right">
           <p className="text-white font-bold text-xs uppercase tracking-widest">Watch Film</p>
           <p className="text-gray-400 text-[10px]">01:45</p>
        </div>
        <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
          <PlayCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;