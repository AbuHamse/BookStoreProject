import React, { useState, useRef } from 'react'; // Added useRef
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiAtSign, FiArrowRight, FiCamera, FiImage } from 'react-icons/fi';
import { Toast } from 'primereact/toast'; // Import Toast
import { registerUser as register } from '@/services/dataApiServices.js'; 

const RegistrationPage = () => {
  const navigate = useNavigate();
  const toast = useRef(null); // Create toast reference
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatarPicture: '', 
    profilePictue: '', 
    bio: ''
  });

  const brandBlue = "#7D9AB3";
  const softBlue = "#8FA7BB";
  const backgroundGrey = "#F3F5F8";

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [field]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await register(formData);
      
      // TRIGGER SUCCESS TOAST
      toast.current.show({
        severity: 'success',
        summary: 'Registration Successful',
        detail: `Welcome aboard, ${formData.firstName}!`,
        life: 3000
      });

      // Redirect after toast shows for a bit
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full pl-12 pr-4 py-4 bg-[#F9FAFB] rounded-2xl border-none focus:ring-2 transition-all outline-none text-sm";

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: backgroundGrey }}>
      {/* PrimeReact Toast Component */}
      <Toast ref={toast} position="top-right" />

      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center mb-10 gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: brandBlue }}>
            <span className="text-white font-serif text-2xl italic font-bold">m</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
            Create <span style={{ color: softBlue }}>Account.</span>
          </h2>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border-4 border-white">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-500 text-[10px] font-bold rounded-xl text-center uppercase tracking-widest border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            
            {/* IMAGE UPLOAD SECTION */}
            <div className="grid grid-cols-2 gap-5 mb-4">
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Avatar</label>
                <div className="relative w-20 h-20 rounded-full bg-white shadow-inner overflow-hidden flex items-center justify-center border-2 border-white">
                  {formData.avatarPicture ? <img src={formData.avatarPicture} alt="Avatar" className="w-full h-full object-cover" /> : <FiUser size={30} className="text-slate-200" />}
                </div>
                <input type="file" id="avatarInput" hidden onChange={(e) => handleFileChange(e, 'avatarPicture')} accept="image/*" />
                <button type="button" onClick={() => document.getElementById('avatarInput').click()} className="text-[9px] font-bold py-2 px-4 bg-white rounded-full shadow-sm hover:shadow-md transition-all uppercase tracking-tighter" style={{ color: brandBlue }}>Choose Photo</button>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Profile Cover</label>
                <div className="relative w-full h-20 rounded-xl bg-white shadow-inner overflow-hidden flex items-center justify-center border-2 border-white">
                  {formData.profilePictue ? <img src={formData.profilePictue} alt="Cover" className="w-full h-full object-cover" /> : <FiImage size={30} className="text-slate-200" />}
                </div>
                <input type="file" id="coverInput" hidden onChange={(e) => handleFileChange(e, 'profilePictue')} accept="image/*" />
                <button type="button" onClick={() => document.getElementById('coverInput').click()} className="text-[9px] font-bold py-2 px-4 bg-white rounded-full shadow-sm hover:shadow-md transition-all uppercase tracking-tighter" style={{ color: brandBlue }}>Choose Photo</button>
              </div>
            </div>

            {/* BIO SECTION */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-1" style={{ color: softBlue }}>Brief Bio</label>
              <textarea 
                placeholder="Tell us about yourself..."
                className={`${inputClass} pl-4 min-h-[100px] resize-none`}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
              />
            </div>

            {/* PERSONAL INFO ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name" className={inputClass} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
              <input type="text" placeholder="Last Name" className={inputClass} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
            </div>

            {/* CREDENTIALS ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative flex items-center text-slate-400"><FiAtSign className="absolute left-4" /><input type="text" placeholder="Username" className={inputClass} onChange={(e) => setFormData({...formData, username: e.target.value})} required /></div>
              <div className="relative flex items-center text-slate-400"><FiMail className="absolute left-4" /><input type="email" placeholder="Email" className={inputClass} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></div>
            </div>

            {/* PASSWORD ROW */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative flex items-center text-slate-400"><FiLock className="absolute left-4" /><input type="password" placeholder="Password" className={inputClass} onChange={(e) => setFormData({...formData, password: e.target.value})} required /></div>
              <div className="relative flex items-center text-slate-400"><FiLock className="absolute left-4" /><input type="password" placeholder="Confirm" className={inputClass} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required /></div>
            </div>

            <button type="submit" disabled={loading} className={`mt-6 w-full py-4 rounded-full text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg active:scale-[0.98]'}`} style={{ backgroundColor: brandBlue }}>
              {loading ? 'Processing...' : 'Create Account'} <FiArrowRight />
            </button>
          </form>

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