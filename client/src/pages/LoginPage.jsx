import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { loginUser } from '@/services/dataApiServices.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    identifier: '', 
    password: ''
  });

  const brandBlue = "#7D9AB3";
  const softBlue = "#8FA7BB";
  const backgroundGrey = "#F3F5F8"; 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Hit the API
      const response = await loginUser(formData);

      // 2. Extract Data (Axios wraps the server response in .data)
      const data = response.data || response;

      // 3. Save the Token and Redirect
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        
        // Optional: Save user info for the UI
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        // 4. Navigate to the profile
        navigate('/users');
      } else {
        setError("Login successful, but no security token was received.");
      }
    } catch (err) {
      // 5. Handle Errors from your APIErrorHandler
      const message = err.response?.data?.message || "Invalid credentials. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-6 py-20" style={{ backgroundColor: backgroundGrey }}>
      
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10 gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: brandBlue }}>
            <span className="text-white font-serif text-2xl italic font-bold">m</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Welcome <span style={{ color: softBlue }}>Back.</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Oh Me Oh My Books</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border-4 border-white">
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-500 text-[10px] font-bold rounded-xl text-center uppercase tracking-widest border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>
                Username or Email
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 opacity-40" style={{ color: brandBlue }} />
                <input 
                  type="text" 
                  placeholder="name@example.com or username"
                  className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] rounded-2xl border-none focus:ring-2 transition-all outline-none text-sm"
                  style={{ color: brandBlue }}
                  onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                  required
                />
              </div>
            </div>

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

            <button 
              type="submit"
              disabled={loading}
              className={`mt-4 w-full py-4 rounded-full text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg active:scale-[0.98]'}`}
              style={{ backgroundColor: brandBlue }}
            >
              {loading ? 'Authenticating...' : 'Sign In'} <FiArrowRight />
            </button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold uppercase tracking-widest hover:underline ml-1" style={{ color: brandBlue }}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] opacity-30" style={{ color: brandBlue }}>
          Secured by JWT & local session
        </p>
      </div>

    </section>
  );
};

export default LoginPage;