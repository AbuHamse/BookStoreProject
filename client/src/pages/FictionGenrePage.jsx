import React from 'react';

// === STEP 1: Import Images from Assets ===
// Assuming your assets are in '../assets/' relative to this component.
// Adjust the path if necessary.
import books3 from '../assets/books3.jpg';
import books4 from '../assets/books4.jpg';
import books5 from '../assets/books5.jpg';
import books6 from '../assets/books6.jpg';
import books7 from '../assets/books7.jpg';
import books8 from '../assets/books8.jpg';
import books9 from '../assets/books9.jpg';
import books10 from '../assets/books10.jpg';

const FictionGenrePage = () => {
  // === STEP 2: Create image array ===
  const bookImages = [
    { id: 3, src: books3, title: "Narrative Fiction" },
    { id: 4, src: books4, title: "Modern Classics" },
    { id: 5, src: books5, title: "Sci-Fi Adventures" },
    { id: 6, src: books6, title: "Historical Novels" },
    { id: 7, src: books7, title: "Mystery & Thriller" },
    { id: 8, src: books8, title: "Magical Realism" },
    { id: 9, src: books9, title: "Fantasy Realms" },
    { id: 10, src: books10, title: "Award Winners" },
  ];

  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Accent/Subtle Blue
  const backgroundGrey = "#F3F5F8"; 
//   const accentGrey = "#CAD5DF";

  return (
    <section className="w-full min-h-screen py-16 px-6 lg:px-20" style={{ backgroundColor: backgroundGrey }}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* === HEADER SECTION === */}
        <div className="flex flex-col gap-2 max-w-xl">
           <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: softBlue }}>
              Genres
           </span>
           <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] font-sans" style={{ color: brandBlue }}>
              The Fiction <br />
              <span style={{ color: softBlue }}>Collection.</span>
           </h1>
           <p className="text-lg leading-relaxed text-slate-700 mt-4">
              Explore our hand-selected titles that defy gravity and shift perspectives. From gripping narratives to timeless classics, find the story that speaks to you.
           </p>
        </div>

        {/* === BOOK GRID SECTION === */}
        {/* Responsive Grid: 2 on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          
          {bookImages.map((book) => (
            <div 
              key={book.id}
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl border-4 border-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* === THE IMAGE (scales on hover) === */}
              <img 
                src={book.src} 
                alt={`Fiction book cover ${book.id}`} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* === THE HOVER OVERLAY (opacity 100 on hover) === */}
              {/* bg-black/60 provides a 60% black opacity. White text centered. */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <h3 className="text-white text-3xl font-black uppercase tracking-tighter font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    FICTION
                 </h3>
                 <p className="text-white text-xs font-medium uppercase tracking-[0.2em] opacity-80 font-sans">
                   {book.title}
                 </p>
              </div>

              {/* Decorative Corner Element (static) */}
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

export default FictionGenrePage;