import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiAtSign, FiArrowRight } from 'react-icons/fi';

const RegistrationPage = () => {
  const navigate = useNavigate();
  
  // Matching your MongoDB Schema fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '' // For UI validation
  });

  const brandBlue = "#7D9AB3";
  const softBlue = "#8FA7BB";
  const backgroundGrey = "#F3F5F8";

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Ready for your Express POST request
    console.log("Registering User:", formData);
  };

  const inputClass = "w-full pl-12 pr-4 py-4 bg-[#F9FAFB] rounded-2xl border-none focus:ring-2 transition-all outline-none text-sm";

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: backgroundGrey }}>
      
      <div className="w-full max-w-2xl">
        {/* LOGO AREA */}
        <div className="flex flex-col items-center mb-10 gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: brandBlue }}>
            <span className="text-white font-serif text-2xl italic font-bold">m</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Create <span style={{ color: softBlue }}>Account.</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest text-center">Join the "Oh Me Oh My" Community</p>
        </div>

        {/* REGISTRATION CARD */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border-4 border-white">
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            
            {/* NAME ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>First Name</label>
                <div className="relative flex items-center text-slate-400">
                  <FiUser className="absolute left-4" />
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Last Name</label>
                <div className="relative flex items-center text-slate-400">
                  <FiUser className="absolute left-4" />
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            {/* USERNAME & EMAIL ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Username</label>
                <div className="relative flex items-center text-slate-400">
                  <FiAtSign className="absolute left-4" />
                  <input 
                    type="text" 
                    placeholder="janedoe"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Email</label>
                <div className="relative flex items-center text-slate-400">
                  <FiMail className="absolute left-4" />
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            {/* PASSWORD ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Password</label>
                <div className="relative flex items-center text-slate-400">
                  <FiLock className="absolute left-4" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Confirm</label>
                <div className="relative flex items-center text-slate-400">
                  <FiLock className="absolute left-4" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className={inputClass}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <button 
              onClick={()=>navigate('/')}
              type="submit"
              className="mt-6 w-full py-4 rounded-full text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-[0.98]"
              style={{ backgroundColor: brandBlue }}
            >
              Create Account <FiArrowRight />
            </button>
          </form>

          {/* REDIRECT */}
          <div className="mt-8 text-center pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="font-bold uppercase tracking-widest hover:underline ml-1" style={{ color: brandBlue }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default RegistrationPage;