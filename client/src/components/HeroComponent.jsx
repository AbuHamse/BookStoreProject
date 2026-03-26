import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroComponent = () => {
  return (
    /* Background: #E9EDF1 (Light Grey/Blue) */
    <section className="relative w-full min-h-screen bg-[#E9EDF1] flex items-center overflow-hidden py-20">
      
      {/* 1. Background Radial Glow - Creating that central 'source' from your palette */}
      <div className="absolute left-[30%] top-[0%] w-[1000px] h-[1000px] rounded-full opacity-30 blur-[150px] pointer-events-none" 
           style={{ background: 'radial-gradient(circle, #8FA7BB 0%, transparent 70%)' }}>
      </div>

      {/* 2. Content Wrapper - Full width but max-max content */}
      <div className="w-full px-6 lg:px-20 z-10 relative"> 
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter uppercase font-sans">
              
              {/* Main text: #7D9AB3 (Darkest Blue) */}
              <span style={{ color: '#7D9AB3' }}>EXPLORE <br />
              <span style={{ color: '#B7C6D4' }}>YOUR NEXT</span> <br /> {/* Secondary accent: #B7C6D4 */}
              CHAPTER.</span>
            </h1>
            
            <p className="max-w-md text-slate-700 text-lg md:text-xl font-light leading-relaxed">
              Bookshelf unlocks access to a global literary world. Discovers new authors, explore different genres, and learn about the books that shape our world.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              
              {/* Solid Button: Using your mid-tones */}
              <button className="text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2"
                      style={{ backgroundColor: '#9AAFC2', color: '#E9EDF1' }}>
                Browse Catalog <span>→</span>
              </button>
              
              {/* Outlined Button: Border matches darkest blue */}
              <button className="border px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2 group hover:bg-white"
                      style={{ borderColor: '#7D9AB3', color: '#7D9AB3' }}>
                About Us <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Content: The Circular Graphic - Updated for Books */}
          <div className="relative flex justify-center lg:justify-end items-center">
            
            {/* Main Glowing Disc - Background matches darkest blue for drama */}
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-full border shadow-[0_0_150px_rgba(143,167,187,0.3)] flex items-center justify-center overflow-hidden"
                 style={{ backgroundColor: '#7D9AB3', borderColor: '#CAD5DF' }}>
               
               {/* Updated Graphic: Iconic Book Icon */}
               <div className="text-5xl md:text-6xl text-white font-serif italic font-medium flex flex-col items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                 <i className="pi pi-book text-7xl mb-1"></i>
                 <span>BOOKSHELF</span>
               </div>
               
               {/* Spinning Ring Decorations - Subtle tones from your palette */}
               <div className="absolute inset-[-30px] rounded-full border border-dashed animate-[spin_40s_linear_infinite]"
                    style={{ borderColor: '#E9EDF1' }}></div>
               <div className="absolute inset-[-60px] rounded-full border border-dotted animate-[spin_60s_linear_reverse_infinite]"
                    style={{ borderColor: '#CAD5DF' }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroComponent;