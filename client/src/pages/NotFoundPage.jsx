import React from 'react'


import { useNavigate } from 'react-router-dom';
import { FiTriangle, FiArrowLeft } from 'react-icons/fi';

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Accent Blue
  const backgroundGrey = "#F3F5F8"; 
  const accentGrey = "#CAD5DF";

  return (
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{ backgroundColor: backgroundGrey }}
    >
      <div className="max-w-2xl flex flex-col items-center gap-8">
        
        {/* THE ICON: Centered and 6xl */}
        <div 
          className="relative flex items-center justify-center p-8 rounded-full bg-white shadow-sm border"
          style={{ borderColor: accentGrey }}
        >
          <FiTriangle 
            className="text-6xl md:text-8xl transition-transform duration-700 hover:rotate-180" 
            style={{ color: brandBlue }} 
          />
          {/* Subtle Glow behind icon */}
          <div 
            className="absolute inset-0 blur-2xl opacity-20 rounded-full"
            style={{ backgroundColor: softBlue }}
          ></div>
        </div>

        {/* THE TEXT */}
        <div className="flex flex-col gap-4">
          <h1 
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
            style={{ color: brandBlue }}
          >
            404
          </h1>
          <h2 
            className="text-xl md:text-2xl font-serif italic"
            style={{ color: softBlue }}
          >
            The chapter you're looking for doesn't exist.
          </h2>
          <p className="max-w-md text-slate-500 text-base leading-relaxed mx-auto">
            It seems this page was moved or perhaps it was never written. Let's get you back to the main story.
          </p>
        </div>

        {/* NAVIGATION BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:shadow-xl active:scale-95"
          style={{ backgroundColor: brandBlue, color: 'white' }}
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-2" />
          Back to Home
        </button>

      </div>

      {/* Decorative Branding at Bottom */}
      <div className="absolute bottom-12 opacity-30">
        <p className="text-xs font-bold uppercase tracking-[0.5em]" style={{ color: brandBlue }}>
          Oh Me Oh My Books
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;