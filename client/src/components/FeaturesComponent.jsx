import React from 'react';
import { FiTruck, FiShield, FiRefreshCw, FiAward } from 'react-icons/fi';

const FeaturesComponent = () => {
  // Color Palette Mapping
  const colors = {
    bg: "#E9EDF1",          // Background tone
    cardOuter: "#F3F5F8",   // Lightest grey (The 'Orange' border in your mockup)
    cardInner: "#CAD5DF",   // Inner 'Photo' area tone (The 'Green' in your mockup)
    iconColor: "#7D9AB3",   // Darkest blue for icons/text
    accent: "#8FA7BB"       // Hover accent
  };

  const features = [
    {
      icon: <FiTruck size={40} />,
      title: "Free Shipping",
      desc: "On all orders over $50"
    },
    {
      icon: <FiShield size={40} />,
      title: "Secure Payment",
      desc: "100% protected checkout"
    },
    {
      icon: <FiRefreshCw size={40} />,
      title: "Easy Returns",
      desc: "30-day money back guarantee"
    },
    {
      icon: <FiAward size={40} />,
      title: "Best Quality",
      desc: "Curated collection of books"
    }
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Responsive Grid: 1 on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-4 transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: colors.cardOuter }}
            >
              {/* Inner 'Photo' Area (The Green Box in your mockup) */}
              <div 
                className="aspect-[4/5] w-full flex flex-col items-center justify-center gap-4 transition-colors duration-300 group-hover:bg-white"
                style={{ backgroundColor: colors.cardInner }}
              >
                <div style={{ color: colors.iconColor }} className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Area (The bottom of the Polaroid) */}
              <div className="pt-6 pb-2 text-center">
                <h4 className="text-lg font-bold uppercase tracking-wider" style={{ color: colors.iconColor }}>
                  {item.title}
                </h4>
                <p className="text-sm mt-1 opacity-70" style={{ color: colors.iconColor }}>
                  {item.desc}
                </p>
              </div>

              {/* Decorative Border Bottom on Hover */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: colors.iconColor }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;