import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  // Color Palette Mapping
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Accent/Subtle Blue
  const backgroundGrey = "#F3F5F8"; 
//   const accentGrey = "#CAD5DF";

  const contactDetails = [
    {
      icon: <FiMail size={24} />,
      label: "Email Us",
      value: "hello@omombooks.io",
      link: "mailto:hello@omombooks.io"
    },
    {
      icon: <FiPhone size={24} />,
      label: "Call Us",
      value: "+1 (555) LUD-GATE",
      link: "tel:+15555834283"
    },
    {
      icon: <FiMapPin size={24} />,
      label: "Visit Us",
      value: "14 Ludgate Hill, London EC4M",
      link: "https://maps.google.com" // Placeholder link
    },
    {
      icon: <FiClock size={24} />,
      label: "Hours",
      value: "Mon - Sat: 9am - 6pm GMT",
      link: null // No link needed for hours
    }
  ];

  return (
    <section className="w-full min-h-screen py-24 px-6 lg:px-20" style={{ backgroundColor: backgroundGrey }}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: The Reassurance Message */}
        <div className="flex flex-col gap-8 max-w-lg">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: softBlue }}>
              Get In Touch
            </span>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] font-sans" style={{ color: brandBlue }}>
              We’re Here <br />
              <span style={{ color: softBlue }}>To Help.</span>
            </h1>
          </div>

          <p className="text-xl font-medium leading-relaxed" style={{ color: brandBlue }}>
            Whether you are looking for a rare first edition or need help navigating your curated dashboard, our team is ready to assist you.
          </p>
          
          <div className="p-6 bg-white rounded-xl shadow-inner border border-slate-100">
             <p className="text-base leading-relaxed text-slate-600 font-light">
               <strong style={{ color: brandBlue }}>Our Promise:</strong> We value your intellectual curiosity and your time. While we don't use automated chat bots, a real member of our curatorial team will review your message and get back to you personally, usually within one business day. Your literary journey is important to us.
             </p>
          </div>
        </div>

        {/* RIGHT SIDE: The Simple Info Card */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-xl border-4 border-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
               style={{ borderColor: 'white' }}> {/* Explicit white border */}
             
             <div className="flex flex-col gap-8">
               <h3 className="text-2xl font-serif italic" style={{ color: brandBlue }}>
                 Oh Me Oh My Books
               </h3>
               
               <div className="flex flex-col gap-6">
                 {contactDetails.map((detail, index) => (
                   <div key={index} className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                     <div className="mt-1" style={{ color: softBlue }}>
                       {detail.icon}
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                         {detail.label}
                       </span>
                       {detail.link ? (
                         <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-base font-medium transition-colors hover:text-[#7D9AB3]" style={{ color: brandBlue }}>
                           {detail.value}
                         </a>
                       ) : (
                         <span className="text-base font-medium" style={{ color: brandBlue }}>
                           {detail.value}
                       </span>
                       )}
                     </div>
                   </div>
                 ))}
               </div>

               {/* Decorative OMOM detail */}
               <div className="flex justify-center mt-4 opacity-30">
                  <div className="text-xs font-serif italic" style={{ color: brandBlue }}>Est. 2026</div>
               </div>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;