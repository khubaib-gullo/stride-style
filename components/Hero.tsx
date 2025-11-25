import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

interface HeroProps {
  onOpenSidebar: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSidebar }) => {
  const slide = HERO_SLIDES[0];

  return (
    <div className="relative w-full min-h-screen pt-24 pb-12 px-4 md:px-8 bg-background flex items-center overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-8 h-8 text-primary/30 rotate-12">
        <Star className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 border-2 border-dark/20 rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-dark">New Collection 2025</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-dark leading-[0.9] tracking-tight">
            WALK <br/>
            WITH <br/>
            <span className="text-primary italic">PURPOSE</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md font-medium leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-dark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-colors duration-300 flex items-center gap-3 group shadow-lg">
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-dark text-dark hover:bg-white transition-colors duration-300">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Right Image (Arch) */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          {/* Sticker Badge */}
          <div className="absolute -top-10 -right-4 md:right-10 z-20 animate-spin-slow">
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center relative">
              <svg className="w-full h-full absolute inset-0 text-white" viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize="11">
                  <textPath xlinkHref="#circle" className="uppercase font-bold tracking-widest fill-current">
                    • Premium Quality • Since 2024
                  </textPath>
                </text>
              </svg>
              <span className="font-display font-black text-2xl text-white">100%</span>
            </div>
          </div>

          <div className="relative w-full max-w-md aspect-[3/4]">
             {/* Outline Stroke Arch */}
            <div className="absolute inset-0 border-2 border-dark rounded-t-[200px] transform translate-x-4 translate-y-4"></div>
            
            {/* Main Image Arch */}
            <div className="absolute inset-0 bg-gray-200 rounded-t-[200px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" 
                alt="Hero Fashion" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;