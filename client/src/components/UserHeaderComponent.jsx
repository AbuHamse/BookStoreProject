import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiChevronDown, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const UserHeaderComponent = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Your established color palette
  const brandBlue = "#7D9AB3";
  const softBlue = "#8FA7BB";
  const accentGrey = "#CAD5DF";

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens)
    console.log("Logging out...");
    navigate("/login");
  };

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

        {/* Navigation - Updated for User View */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to="/books" className={({ isActive }) => 
            `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-[#7D9AB3]' : 'text-slate-400 hover:text-[#7D9AB3]'}`
          }>
            Books
          </NavLink>
          <NavLink to="/authors" className={({ isActive }) => 
            `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-[#7D9AB3]' : 'text-slate-400 hover:text-[#7D9AB3]'}`
          }>
            Authors
          </NavLink>
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <div className="flex items-center pr-6 border-r border-slate-200">
            <FiShoppingCart 
              className="cursor-pointer text-slate-400 hover:text-[#7D9AB3] transition-colors" 
              size={20} 
              onClick={() => navigate("/cart")}
            />
          </div>
          
          {/* User Profile Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-slate-50 transition-all">
              {/* Profile Avatar Image/Icon */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 text-white shadow-sm"
                style={{ backgroundColor: softBlue, borderColor: accentGrey }}
              >
                <FiUser size={20} />
              </div>
              <FiChevronDown className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full w-48 bg-white shadow-2xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <button 
                  onClick={() => navigate("/user/profile")} 
                  className="w-full flex items-center gap-3 px-4 py-3 text-xs uppercase font-bold text-slate-500 hover:bg-[#F3F5F8] hover:text-[#7D9AB3] transition-colors"
                >
                  <FiUser size={14} /> Profile
                </button>
                <button 
                  onClick={() => navigate("/user/settings")} 
                  className="w-full flex items-center gap-3 px-4 py-3 text-xs uppercase font-bold text-slate-500 hover:bg-[#F3F5F8] hover:text-[#7D9AB3] transition-colors"
                >
                  <FiSettings size={14} /> Settings
                </button>
                <div className="h-[1px] bg-slate-100 my-1 mx-2" />
                <button 
                  onClick={handleLogout} 
                  className="w-full flex items-center gap-3 px-4 py-3 text-xs uppercase font-bold text-red-400 hover:bg-red-50 transition-colors"
                >
                  <FiLogOut size={14} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

export default UserHeaderComponent;