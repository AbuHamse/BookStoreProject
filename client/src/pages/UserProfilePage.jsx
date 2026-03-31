import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';

const UserProfilePage = () => {
    const [userData, setUserData] = useState({
        name: 'Ayanle Dirie',
        email: 'ayanlee@example.com',
        bio: 'Avid reader and collector of rare editions.'
    });

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <Avatar 
                        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" 
                        shape="circle" 
                        className="w-32 h-32 border-4 border-blue-500" 
                    />
                    <div className="text-center md:text-left flex-grow">
                        <h1 className="text-3xl font-bold text-gray-800">{userData.name}</h1>
                        <p className="text-gray-500 mb-4">{userData.email}</p>
                        <div className="flex gap-2 justify-center md:justify-start">
                            <Button label="Edit Profile" icon="pi pi-pencil" className="p-button-sm p-button-outlined" />
                            <Button label="Sign Out" icon="pi pi-power-off" className="p-button-sm p-button-danger p-button-text" />
                        </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="flex gap-8 border-l pl-8 hidden lg:flex">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-blue-600">12</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Orders</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-blue-600">5</span>
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Wishlist</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Tabs */}
                <Card className="shadow-sm border-none">
                    <TabView>
                        <TabPanel header="Personal Info" leftIcon="pi pi-user mr-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="username" className="font-semibold">Full Name</label>
                                    <InputText id="username" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-semibold">Email Address</label>
                                    <InputText id="email" value={userData.email} disabled className="bg-gray-100" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label htmlFor="bio" className="font-semibold">Bio</label>
                                    <InputText id="bio" value={userData.bio} onChange={(e) => setUserData({...userData, bio: e.target.value})} />
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button label="Save Changes" icon="pi pi-check" className="p-button-primary" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel header="Order History" leftIcon="pi pi-shopping-cart mr-2">
                            <div className="py-4">
                                <ul className="list-none p-0 m-0">
                                    {[1, 2, 3].map((order) => (
                                        <li key={order} className="flex items-center justify-between p-4 mb-3 border rounded-md hover:bg-gray-50 transition-colors">
                                            <div>
                                                <span className="font-bold block text-gray-700">Order #1002{order}</span>
                                                <small className="text-gray-400">Placed on March {20 + order}, 2026</small>
                                            </div>
                                            <div className="text-right">
                                                <span className="block font-semibold text-blue-600">$45.00</span>
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase">Delivered</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabPanel>
                    </TabView>
                </Card>
            </div>
        </div>
    );
};

export default UserProfilePage;