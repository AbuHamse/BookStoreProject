import React, { useState, useEffect, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { getUserProfile, updateUserProfile } from '@/services/dataApiServices.js';

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const toast = useRef(null); // Ref for the Toast component

    const brandBlue = "#7D9AB3";

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getUserProfile();
                // Extracting data safely
                const data = res.data?.data || res.data;
                setUserData(data);
            } catch (err) {
                console.error("Fetch error:", err);
                // Check if toast exists before calling .show()
                if (toast.current) {
                    toast.current.show({ 
                        severity: 'error', 
                        summary: 'Error', 
                        detail: 'Session expired. Please log in again.' 
                    });
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    };

    // --- CRITICAL: If loading or userData is null, show spinner instead of the UI ---
    if (loading || !userData) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F5F8]">
                <ProgressSpinner style={{width: '50px', height: '50px'}} />
                <p className="mt-4 text-slate-400 animate-pulse uppercase tracking-widest text-xs">Loading Profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F3F5F8] p-4 md:p-8">
            <Toast ref={toast} />
            
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-white p-8 rounded-3xl shadow-sm border-4 border-white">
                    <Avatar 
                        // Use Optional Chaining here just in case
                        image={userData?.avatarPicture || "https://via.placeholder.com/150"} 
                        shape="circle" 
                        className="w-32 h-32 border-4" 
                        style={{ borderColor: brandBlue }}
                    />
                    <div className="text-center md:text-left flex-grow">
                        <h1 className="text-3xl font-black tracking-tighter" style={{ color: brandBlue }}>
                            {userData?.firstName} {userData?.lastName}
                        </h1>
                        <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-4">@{userData?.username}</p>
                        <Button 
                            label="Sign Out" 
                            icon="pi pi-power-off" 
                            className="p-button-sm p-button-text p-button-danger" 
                            onClick={handleLogout}
                        />
                    </div>
                </div>

                <Card className="shadow-xl rounded-3xl border-none overflow-hidden">
                    <TabView>
                        <TabPanel header="Personal Info" leftIcon="pi pi-user mr-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                    <InputText value={userData?.firstName || ''} onChange={(e) => setUserData({...userData, firstName: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                    <InputText value={userData?.lastName || ''} onChange={(e) => setUserData({...userData, lastName: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Bio</label>
                                    <InputText value={userData?.bio || ''} onChange={(e) => setUserData({...userData, bio: e.target.value})} />
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </Card>
            </div>
        </div>
    );
};

export default UserProfilePage;