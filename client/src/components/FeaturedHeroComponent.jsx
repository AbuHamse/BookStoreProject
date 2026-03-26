import React from 'react';

import books from '../assets/books.jpg'

const FeaturedHeroComponent = () => {
  // Colors mapped from your palette (image_2.png)
  const colors = {
    background: "#F3F5F8", // lightest grey
    headerText: "#7D9AB3", // darkest blue (replaces 'blue' placeholder)
    bodyText: "#CAD5DF",   // medium accent grey (replaces 'red' text color)
    darkAccent: "#9AAFC2"  // secondary blue
  };

  return (
    /* The main wrapper. Occupies full width and high minimum height. */
    <section 
      style={{ backgroundColor: colors.background }} 
      className="w-full min-h-[75vh] py-16 px-6 lg:px-20 border-t border-slate-200"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-center">
        
        {/* === LEFT SIDE (Header & Image) === */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          
          {/* Header (replaces 'blue' placeholder) */}
          <div className="w-full">
            <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{color: colors.darkAccent}}>
              Discover
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase font-sans mt-1" 
                style={{color: colors.headerText}}>
              New Arrivals <br />
              & Top Picks.
            </h2>
          </div>

          {/* Featured Image (replaces 'green' placeholder) */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/50">
            {/* Make sure /assets/books.jpg exists in your project's public folder or is imported correctly */}
            <img 
              src={books}
              alt="Featured Bookstore Collection" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>


        {/* === RIGHT SIDE (Supporting Text) === */}
        {/* text-container (replaces 'red' placeholder) */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col gap-6 md:mt-[150px] lg:mt-[180px]">
          
          <h3 className="text-2xl font-serif font-medium" style={{color: colors.headerText}}>
            Explore Curated Collections
          </h3>
          
          <p className="text-lg md:text-xl font-light leading-relaxed" 
             style={{color: colors.headerText}}> {/* Keeping text high contrast */}
            Dive deep into our hand-selected titles, featuring critically acclaimed new authors, essential bestsellers, and timeless classics. From gripping thrillers to inspiring biographies, your next favorite story is waiting.
          </p>
          
          <p className="text-base font-normal leading-relaxed" 
             style={{color: "#576a7e"}}> {/* A slightly darker text for readability */}
            Each month, our editors curate unique lists that highlight diverse voices and innovative storytelling. We believe every book has a reader, and we are dedicated to helping you find yours. Explore our collections and find the spark for your next adventure.
          </p>

          <button className="self-start text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 group mt-4 hover:shadow-lg"
                  style={{ backgroundColor: colors.headerText }}>
            View All Collections <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedHeroComponent;