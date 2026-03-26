import React from 'react'


const HeroComponent = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#00362b] flex items-center overflow-hidden px-6 lg:px-16 py-20">
      
      {/* Background Radial Glow (The "Arc" effect) */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]" 
           style={{ background: 'radial-gradient(circle, #00ff8c 0%, transparent 70%)' }}>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f5f5f0] leading-[0.9] tracking-tighter uppercase">
            Connecting the <br />
            <span className="text-[#00ff8c]">Clean Energy</span> <br />
            Future.
          </h1>
          
          <p className="max-w-md text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Bookshelf unlocks access to global literary data. Our technology powers the next generation of reading solutions, giving anyone the tools to discover and learn.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-[#00ff8c] hover:bg-[#00e67e] text-[#00362b] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
              Contact sales <span className="text-xl">→</span>
            </button>
            <button className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
              Learn more <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Content: The Circular Graphic */}
        <div className="relative flex justify-center items-center">
          {/* Main Glowing Disc */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#00362b] border border-[#00ff8c]/30 shadow-[0_0_100px_rgba(0,255,140,0.2)] flex items-center justify-center">
             <div className="text-[#00ff8c] text-4xl font-bold tracking-tighter">(arc)</div>
             
             {/* Spinning Ring Decoration */}
             <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#00ff8c]/20 animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-[-50px] rounded-full border border-dotted border-[#00ff8c]/10 animate-[spin_30s_linear_reverse_infinite]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroComponent;