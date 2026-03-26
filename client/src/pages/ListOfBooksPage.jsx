import React, {useMemo} from 'react'
import STATIC_BOOKS from '../db/fakeDB';

const ListOfBooksPage = () => {
  const nonFictionBooks = useMemo(() => STATIC_BOOKS, []);

  const brandBlue = "#7D9AB3";
//   const softBlue = "#8FA7BB";
  const backgroundGrey = "#F3F5F8";

  return (
    <section className="w-full min-h-screen py-20 px-6 lg:px-20" style={{ backgroundColor: backgroundGrey }}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* Header... (Keep same as before) */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {nonFictionBooks.map((book) => (
            <div 
              key={book.id}
              // Add 'will-change-transform' to help the browser pre-optimize the hover animation
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 will-change-transform"
            >
              <img 
                src={book.src} 
                alt={book.title} 
                // Using 'loading="lazy"' helps the initial page load feel smoother
                loading="lazy"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <h3 className="text-white text-3xl font-black uppercase tracking-tighter">NON-FICTION</h3>
                 <p className="text-white text-xs font-medium uppercase tracking-[0.2em]">{book.title}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-center block" style={{ color: brandBlue }}>
                   {book.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ListOfBooksPage