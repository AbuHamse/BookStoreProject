import React from 'react';
import books2 from '../assets/books2.jpg';

const AboutSectionComponent = () => {
  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Hover/Accent Blue
  const lightGrey = "#F3F5F8";   // Background
  const accentGrey = "#CAD5DF";  // Subtle borders/details

  return (
    <section className="w-full min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: lightGrey }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: PHILOSOPHY & TEXT */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: softBlue }}>
                Our Philosophy
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]" style={{ color: brandBlue }}>
                Oh Me <br />
                <span style={{ color: softBlue }}>Oh My</span> <br />
                Books.
              </h2>
            </div>

            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-xl font-medium leading-relaxed" style={{ color: brandBlue }}>
                We believe that every reader deserves a "moment of wonder"—that instant where a story completely shifts your perspective.
              </p>
              
              <p className="text-base leading-relaxed text-slate-500">
                Founded on the idea that curation is an art form, Oh Me Oh My Books isn't just a shop; it's a sanctuary for the curious. We bypass the algorithms to bring you titles that challenge, comfort, and inspire. From rare finds to contemporary masterpieces, our shelves are built for those who still believe in the magic of a physical page.
              </p>

              <div className="pt-4">
                <div className="w-20 h-1 mb-4" style={{ backgroundColor: brandBlue }}></div>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: brandBlue }}>
                  EST. 2026 — LITERARY CURATORS
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE VISUAL (Sleek Frame) */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Decorative Background Box */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 rounded-2xl pointer-events-none hidden lg:block" 
                 style={{ borderColor: accentGrey }}></div>
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
              <img 
                src={books2} 
                alt="Our curated collection" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-xl rounded-lg hidden md:block">
                <p className="text-3xl font-serif italic" style={{ color: brandBlue }}>"Wonder in every page."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionComponent;