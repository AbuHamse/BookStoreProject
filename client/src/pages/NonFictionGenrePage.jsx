import React, { useMemo } from 'react';
import STATIC_BOOKS from '../db/fakeDB';


const NonFictionGenrePage = () => {
  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Accent/Subtle Blue
  const backgroundGrey = "#F3F5F8"; 
   const nonFictionBooks = useMemo(() => STATIC_BOOKS, []);

  return (
    <section className="w-full min-h-screen py-16 px-6 lg:px-20" style={{ backgroundColor: backgroundGrey }}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* === HEADER SECTION === */}
        <div className="flex flex-col gap-2 max-w-xl">
           <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: softBlue }}>
              Genres
           </span>
           <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] font-sans" style={{ color: brandBlue }}>
              Non-Fiction <br />
              <span style={{ color: softBlue }}>Insights.</span>
           </h1>
           <p className="text-lg leading-relaxed text-slate-700 mt-4">
              Expand your horizons with our curated non-fiction library. From deep dives into human history to the latest in scientific thought, these are the stories that actually happened.
           </p>
        </div>

        {/* === BOOK GRID SECTION === */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          
          {nonFictionBooks.map((book) => (
            <div 
              key={book.id}
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl border-4 border-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 will-change-transform"
            >
              {/* === THE IMAGE === */}
              <img 
                src={book.src} 
                alt={`Non-fiction book cover ${book.id}`} 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* === THE HOVER OVERLAY === */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <h3 className="text-white text-2xl font-black uppercase tracking-tighter font-sans">
                    NON-FICTION
                 </h3>
                 <p className="text-white text-[10px] font-medium uppercase tracking-[0.2em] opacity-80 font-sans">
                   {book.title}
                 </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 text-xs font-serif italic text-white/50 opacity-100 group-hover:opacity-0 transition-opacity">
                OMOM
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NonFictionGenrePage;