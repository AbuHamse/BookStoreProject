import React, { useState, useEffect, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
// Import both services
import { getUserProfile, updateUserProfile } from '@/services/dataApiServices.js';

const UserProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false); // State for the save button
    const toast = useRef(null);

    const brandBlue = "#7D9AB3";

    // 1. Fetch Profile on Mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getUserProfile();
                // Match your API response structure (usually res.data.data)
                setUserData(res.data?.data || res.data);
            } catch (err) {
                console.error("Fetch error:", err);
                if (toast.current) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Could not load profile' });
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    // 2. USE THE UPDATE SERVICE HERE
    const handleSave = async () => {
        setUpdating(true);
        try {
            // This hits your PUT /api/v1/users/profile route
            await updateUserProfile(userData);
            
            toast.current.show({ 
                severity: 'success', 
                summary: 'Success', 
                detail: 'Profile updated in MongoDB!' 
            });
        } catch (err) {
            toast.current.show({ 
                severity: 'error', 
                summary: 'Update Failed', 
                detail: err.response?.data?.message || 'Error updating profile' 
            });
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    };

    // --- SAFETY GUARD: Prevents 'reading avatarPicture of null' ---
    if (loading || !userData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ProgressSpinner />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F3F5F8] p-4 md:p-8">
            <Toast ref={toast} />
            
            <div className="max-w-4xl mx-auto">
                {/* Header Card */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-white p-8 rounded-3xl shadow-sm border-4 border-white">
                    <Avatar 
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
                        <Button label="Sign Out" icon="pi pi-power-off" className="p-button-sm p-button-text p-button-danger" onClick={handleLogout} />
                    </div>
                </div>

                {/* Form Card */}
                <Card className="shadow-xl rounded-3xl border-none overflow-hidden">
                    <TabView>
                        <TabPanel header="Edit Profile" leftIcon="pi pi-user mr-2">
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
                                    <textarea 
                                        className="p-inputtext p-component p-inputtext-sm rounded-xl min-h-[100px] p-3 border border-slate-200"
                                        value={userData?.bio || ''} 
                                        onChange={(e) => setUserData({...userData, bio: e.target.value})} 
                                    />
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    {/* ATTACHED THE SERVICE CALL HERE */}
                                    <Button 
                                        label={updating ? "Saving..." : "Save Changes"} 
                                        icon="pi pi-check" 
                                        loading={updating}
                                        onClick={handleSave} 
                                        style={{ backgroundColor: brandBlue, border: 'none' }}
                                        className="rounded-full px-8 py-3 font-bold"
                                    />
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