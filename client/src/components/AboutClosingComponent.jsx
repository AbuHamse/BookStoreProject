import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutClosingComponent = () => {
  const navigate = useNavigate();

  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Secondary Blue
  const lightGrey = "#F3F5F8";   // Background

  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
        
        {/* TOP BAR: Main Statement */}
        <div 
          className="w-full py-12 px-8 lg:px-16 flex items-center justify-between group cursor-default transition-all duration-500 hover:pl-20"
          style={{ backgroundColor: lightGrey }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none" style={{ color: brandBlue }}>
            Ready to find <br />
            <span style={{ color: softBlue }}>your story?</span>
          </h2>
          <div className="hidden md:block text-8xl opacity-10 font-serif italic" style={{ color: brandBlue }}>
            &ldquo;
          </div>
        </div>

        {/* BOTTOM BAR: The Action */}
        <div 
          className="w-full py-12 px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 hover:pr-20"
          style={{ backgroundColor: brandBlue }}
        >
          <p className="text-white text-lg md:text-xl font-light max-w-xl text-center md:text-left">
            Join our community of readers today. Access exclusive curations, early arrivals, and personalized recommendations.
          </p>
          
          <button 
            onClick={() => navigate("/browse")}
            className="bg-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ color: brandBlue }}
          >
            Start Reading <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutClosingComponent;