import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiChevronDown } from 'react-icons/fi';

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  // This is a placeholder for your auth logic
  // Replace with your actual auth state (e.g., from a Context or Redux)
  const isAuthorized = false; 

  const brandBlue = "#7D9AB3";
  const softBlue = "#8FA7BB";
  const accentGrey = "#CAD5DF";

  return (
    <header className="w-full bg-white border-b sticky top-0 z-[100]" style={{ borderColor: accentGrey }}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate("/")}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12" style={{ backgroundColor: brandBlue }}>
            <span className="text-white font-serif text-xl italic font-bold">m</span>
          </div>
          <h1 className="text-xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Oh Me <span style={{ color: softBlue }}>Oh My</span> Books
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#7D9AB3]">Home</NavLink>
          <NavLink to="/about" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#7D9AB3]">About</NavLink>
          
          <div className="group relative cursor-pointer flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#7D9AB3]">
            Genre <FiChevronDown />
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-2 p-2">
              <button onClick={() => navigate("/books?category=fiction")} className="w-full text-left px-4 py-2 hover:bg-[#F3F5F8] text-xs uppercase font-bold text-slate-500">Fiction</button>
              <button onClick={() => navigate("/books?category=scifi")} className="w-full text-left px-4 py-2 hover:bg-[#F3F5F8] text-xs uppercase font-bold text-slate-500">Sci-Fi</button>
            </div>
          </div>

          <NavLink to="/contact" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#7D9AB3]">Contact</NavLink>
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-6">
          {/* Only shows if user is authorized */}
          {isAuthorized && (
            <div className="flex items-center pr-6 border-r border-slate-200">
              <FiShoppingCart 
                className="cursor-pointer text-slate-400 hover:text-[#7D9AB3] transition-colors" 
                size={20} 
                onClick={() => navigate("/cart")}
              />
            </div>
          )}
          
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:shadow-lg"
            style={{ backgroundColor: brandBlue, color: 'white' }}
          >
            Login
          </button>
        </div>

      </div>
    </header>
  );
};

export default HeaderComponent;