import React from 'react';

const AboutMissionComponent = () => {
  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue (Header)
  const softBlue = "#8FA7BB";    // Secondary Blue
//   const backgroundGrey = "#F3F5F8"; 
//   const accentGrey = "#CAD5DF";  // Subtle border/text

  return (
    <section className="w-full py-24 px-6 lg:px-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* TOP SECTION (The Yellow/Gold Bar in your template) */}
        <div className="w-full text-center pb-12 border-b border-slate-100">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Our Mission is Simple: <br />
            <span style={{ color: softBlue }}>To keep the story alive.</span>
          </h2>
        </div>

        {/* BOTTOM SECTION (The Blue and Red columns in your template) */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column (The 'Blue' placeholder) */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: softBlue }}>
              01. The Curator's Mindset
            </h3>
            <p className="text-2xl font-serif italic leading-snug" style={{ color: brandBlue }}>
              "We don't stock every book ever written—only the ones that changed our lives."
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              At Oh Me Oh My Books, we treat shelf space like a gallery. Every title is hand-selected based on its literary merit, its design, and its ability to provoke thought. We believe in quality over quantity, ensuring that when you browse our collection, you aren't overwhelmed—you're inspired.
            </p>
          </div>

          {/* Right Column (The 'Red' placeholder) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: softBlue }}>
              02. The Reader's Promise
            </h4>
            <p className="text-2xl font-serif italic leading-snug" style={{ color: brandBlue }}>
              "Your privacy and your passion for reading are our highest priorities."
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              In a world of digital tracking, we provide a quiet space for your intellectual curiosity. Whether you are an authorized member accessing your curated dashboard or a guest exploring genres, we promise a seamless, beautiful, and distraction-free environment to find your next favorite chapter.
            </p>
          </div>

        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-8">
           <div className="w-16 h-16 rounded-full border flex items-center justify-center opacity-30" style={{ borderColor: brandBlue }}>
              <span className="font-serif italic text-xl" style={{ color: brandBlue }}>&</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMissionComponent;