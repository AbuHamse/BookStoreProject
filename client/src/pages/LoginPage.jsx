import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Colors from your palette
  const brandBlue = "#7D9AB3";   // Darkest Blue
  const softBlue = "#8FA7BB";    // Accent Blue
  const backgroundGrey = "#F3F5F8"; 

  const handleLogin = (e) => {
    e.preventDefault();
    // This is where you'll call your Express/MongoDB backend
    console.log("Logging in with:", formData);
  };

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-6 py-20" style={{ backgroundColor: backgroundGrey }}>
      
      <div className="w-full max-w-md">
        {/* LOGO AREA */}
        <div className="flex flex-col items-center mb-10 gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: brandBlue }}>
            <span className="text-white font-serif text-2xl italic font-bold">m</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Welcome <span style={{ color: softBlue }}>Back.</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Oh Me Oh My Books</p>
        </div>

        {/* LOGIN CARD */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border-4 border-white">
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            
            {/* EMAIL / USERNAME */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>
                Email Address
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 opacity-40" style={{ color: brandBlue }} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] rounded-2xl border-none focus:ring-2 transition-all outline-none text-sm"
                  style={{ color: brandBlue }}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: softBlue }}>
                  Password
                </label>
                <Link to="/forgot-password" size="sm" className="text-[10px] font-bold uppercase tracking-widest hover:underline" style={{ color: softBlue }}>
                  Forgot?
                </Link>
              </div>
              <div className="relative flex items-center">
                <FiLock className="absolute left-4 opacity-40" style={{ color: brandBlue }} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] rounded-2xl border-none focus:ring-2 transition-all outline-none text-sm"
                  style={{ color: brandBlue }}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit"
              className="mt-4 w-full py-4 rounded-full text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]"
              style={{ backgroundColor: brandBlue }}
              onClick={() => navigate("/")}
            >
              Sign In <FiArrowRight />
            </button>
          </form>

          {/* SIGN UP REDIRECT */}
          <div className="mt-8 text-center pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="font-bold uppercase tracking-widest hover:underline ml-1"
                style={{ color: brandBlue }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] opacity-30" style={{ color: brandBlue }}>
          Secured by JWT & Cookie Session
        </p>
      </div>

    </section>
  );
};

export default LoginPage;