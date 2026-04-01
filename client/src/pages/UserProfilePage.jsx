import React, { useState, useEffect, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { fetchAllData, getUserProfile } from '@/services/dataApiServices.js';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [topAuthors, setTopAuthors] = useState([]);
  const [friends, setFriends] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  const brandBlue = "#7D9AB3"; 
  const softBlue = "#8FA7BB";
  const bgGrey = "#F3F5F8";

  // Helper to fix broken images with DiceBear fallbacks
  const getAvatar = (user, type = 'adventurer') => {
    if (user?.avatarPicture && user.avatarPicture.startsWith('http')) return user.avatarPicture;
    // Generate a consistent, cool avatar based on their name if DB image fails
    return `https://api.dicebear.com/7.x/${type}/svg?seed=${user?.username || user?.name || 'default'}`;
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [userRes, dashboard] = await Promise.all([
          getUserProfile(),
          fetchAllData()
        ]);
        
        setUserData(userRes.data?.data || userRes.data);
        
        // 1. Get Top 10 Authors based on rating
        const sortedAuthors = (dashboard.authors || [])
          .sort((a, b) => (b.communityRating || 0) - (a.communityRating || 0))
          .slice(0, 10);
        setTopAuthors(sortedAuthors);

        // 2. Get 10 Random Users for "Friends"
        const randomUsers = (dashboard.users || [])
          .filter(u => u._id !== userRes.data?.data?._id) // Don't show yourself
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        setFriends(randomUsers);

        setBooks(dashboard.books || []);
      } catch (err) {
        if (toast.current) {
          toast.current.show({ severity: 'error', summary: 'Sync Error', detail: 'Failed to fetch community data.' });
        }
        console.error(err)
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  // Template for Authors
  const authorTemplate = (author) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-[2rem] mx-2 border border-slate-100 shadow-sm transition-all hover:shadow-md">
      <Avatar image={getAvatar(author, 'micah')} shape="circle" size="xlarge" className="mb-3 border-2" style={{borderColor: brandBlue}} />
      <span className="font-bold text-[10px] uppercase tracking-widest text-center truncate w-full" style={{color: brandBlue}}>
        {author.name}
      </span>
      <Rating value={author.communityRating || 5} readOnly cancel={false} className="mt-3 scale-75" />
    </div>
  );

  // Template for Friends
  const friendTemplate = (friend) => (
    <div className="flex flex-col items-center p-4 mx-2">
      <Avatar image={getAvatar(friend, 'avataaars')} shape="circle" size="large" className="mb-2 border-2 border-white shadow-sm" />
      <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400">{friend.username}</span>
    </div>
  );

  if (loading) return <div className="h-screen flex items-center justify-center bg-[#F3F5F8]"><ProgressSpinner strokeWidth="3" /></div>;

  return (
    <div className="min-h-screen p-6 lg:p-12" style={{ backgroundColor: bgGrey }}>
      <Toast ref={toast} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* WELCOME SECTION */}
          <div className="bg-white rounded-[3rem] p-12 flex justify-evenly items-center shadow-xl border-4 border-white">
            <div className="flex-1">
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-none" style={{color: brandBlue}}>
                Welcome back,<br />
                <span style={{color: softBlue}}>{userData?.firstName}</span>
              </h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3 ml-1">Member Since 2026</p>
            </div>
            {/* Added Profile Pic here per your request */}
            <Avatar image={getAvatar(userData, 'adventurer')} shape="circle" className="w-40 h-40 border-[10px] border-[#F9FAFB] shadow-2xl" />
          </div>

          {/* FRIENDS CAROUSEL */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-lg border-2 border-white">
             <h3 className="font-black uppercase tracking-widest text-[9px] mb-4 ml-4" style={{color: softBlue}}>Friends Online</h3>
             <Carousel value={friends} numVisible={6} numScroll={1} circular autoplayInterval={4000} itemTemplate={friendTemplate} showIndicators={false} />
          </div>

          {/* AUTHOR CAROUSEL */}
          <div className="rounded-[3rem] p-10 shadow-xl border-4 border-white flex-grow flex flex-col justify-center bg-white">
            <div className="flex justify-between items-center mb-8 px-6">
              <h3 className="font-black uppercase tracking-widest text-xs" style={{color: brandBlue}}>Top Rated Authors</h3>
              <div className="h-[1px] flex-grow mx-6 bg-slate-100"></div>
            </div>
            <Carousel value={topAuthors} numVisible={4} numScroll={1} circular autoplayInterval={3500} itemTemplate={authorTemplate} />
          </div>
        </div>

        {/* RIGHT COLUMN: Popular Books */}
        <div className="lg:col-span-5 bg-white rounded-[3rem] p-10 shadow-xl border-4 border-white flex flex-col gap-8 max-h-[90vh]">
          <div className="flex justify-between items-center border-b border-slate-50 pb-6">
            <h3 className="font-black uppercase tracking-widest text-xs" style={{color: brandBlue}}>Community Favorites</h3>
            <span className="bg-slate-50 text-slate-400 text-[10px] px-3 py-1 rounded-full font-bold">TOP 10</span>
          </div>
          
          <div className="flex flex-col gap-4 overflow-y-auto pr-4 custom-scrollbar">
            {books.slice(0, 10).map((book, i) => (
              <div key={book._id || i} className="flex items-center gap-5 bg-[#F9FAFB] p-5 rounded-[2.5rem] border border-white hover:bg-white hover:shadow-md transition-all group cursor-pointer">
                <img src={book.coverImage || 'https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg'} className="w-14 h-20 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="book" />
                <div className="flex flex-col flex-grow">
                  <span className="font-bold text-sm leading-tight" style={{color: brandBlue}}>{book.title}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-black mt-2 tracking-widest">{book.authorName}</span>
                </div>
                <div className="font-black text-4xl italic opacity-5" style={{color: brandBlue}}>{(i+1).toString().padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfilePage;