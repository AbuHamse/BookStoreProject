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
    const toast = useRef(null);

    const brandBlue = "#7D9AB3";

    // 1. Fetch Real Data on Mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getUserProfile();
                setUserData(res.data?.data || res.data);
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Could not load profile' });
                console.error(error)
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    // 2. Handle Profile Update
    const handleSave = async () => {
        setUpdating(true);
        try {
            await updateUserProfile(userData);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Profile updated successfully!' });
        } catch (err) {
            toast.current.show({ severity: 'error', summary: 'Update Failed', detail: err.response?.data?.message || 'Error' });
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F3F5F8] p-4 md:p-8">
            <Toast ref={toast} />
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-white p-8 rounded-3xl shadow-sm border-4 border-white">
                    <Avatar 
                        image={userData.avatarPicture || "https://via.placeholder.com/150"} 
                        shape="circle" 
                        className="w-32 h-32 border-4" 
                        style={{ borderColor: brandBlue }}
                    />
                    <div className="text-center md:text-left flex-grow">
                        <h1 className="text-3xl font-black tracking-tighter" style={{ color: brandBlue }}>
                            {userData.firstName} {userData.lastName}
                        </h1>
                        <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-4">@{userData.username}</p>
                        <div className="flex gap-2 justify-center md:justify-start">
                            <Button 
                                label="Sign Out" 
                                icon="pi pi-power-off" 
                                className="p-button-sm p-button-text p-button-danger" 
                                onClick={handleLogout}
                            />
                        </div>
                    </div>
                    
                    {/* Quick Stats (Static for now) */}
                    <div className="flex gap-8 border-l pl-8 hidden lg:flex border-slate-100">
                        <div className="text-center">
                            <span className="block text-2xl font-black" style={{ color: brandBlue }}>12</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Books Read</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Tabs */}
                <Card className="shadow-xl rounded-3xl border-none overflow-hidden">
                    <TabView className="custom-tabview">
                        <TabPanel header="Personal Info" leftIcon="pi pi-user mr-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                    <InputText value={userData.firstName} onChange={(e) => setUserData({...userData, firstName: e.target.value})} className="p-inputtext-sm rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                    <InputText value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value})} className="p-inputtext-sm rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                                    <InputText value={userData.email} disabled className="bg-gray-50 text-slate-400 rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Role</label>
                                    <InputText value={userData.role} disabled className="bg-gray-50 text-slate-400 rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Bio</label>
                                    <textarea 
                                        className="p-inputtext p-component p-inputtext-sm rounded-xl min-h-[100px] p-3 border border-slate-200 outline-none focus:ring-2"
                                        style={{ '--tw-ring-color': brandBlue }}
                                        value={userData.bio} 
                                        onChange={(e) => setUserData({...userData, bio: e.target.value})} 
                                    />
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button 
                                        label={updating ? "Saving..." : "Save Changes"} 
                                        icon="pi pi-check" 
                                        loading={updating}
                                        className="rounded-full px-8 py-3 font-bold uppercase tracking-widest text-xs"
                                        style={{ backgroundColor: brandBlue, border: 'none' }}
                                        onClick={handleSave}
                                    />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel header="Community Activity" leftIcon="pi pi-comments mr-2">
                            <div className="py-8 text-center">
                                <i className="pi pi-book text-4xl text-slate-200 mb-4 block"></i>
                                <p className="text-slate-400 text-sm">You haven't posted any reviews yet.</p>
                            </div>
                        </TabPanel>
                    </TabView>
                </Card>
            </div>
        </div>
    );
};

export default UserProfilePage;