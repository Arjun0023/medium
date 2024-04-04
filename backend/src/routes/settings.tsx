import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings } from 'lucide-react'
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { useState } from 'react'


const SettingsComp = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const [showPopup, setShowPopup] = useState(false);

    const handleTabClick = (tabName:any) => {
        setActiveTab(tabName);
    };

    const handleGenerateLink = () => {
        setShowPopup(true);
    };

    const handleResetLink = () => {
        // Logic to reset the invite link
        setShowPopup(false);
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex items-center gap-[20px] !select-none text-[0.9rem] py-[8px] px-[10px]'>
                    <Settings size={20} color='#344054' />
                    Settings
                </div>
            </DialogTrigger>
            <DialogContent className="bl:max-w-[min(85vw,1050px)] bl:h-[min(85vh,600px)] !rounded-[15px] flex !p-[0px]">
                <div className="w-[30%] h-[100%] overflow-y-auto bg-[#fbfbfa] rounded-l-[15px]">
                    <div className='flex items-center gap-[20px] !select-none text-[0.9rem] py-[8px] px-[50px]'>
                        <button className={`flex items-center gap-[20px] !select-none text-[0.9rem] py-[8px] px-[60px] ${activeTab === 'Profile' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Profile')}>Profile</button>
                    </div>
                    <div className='flex items-center gap-[16px] text-[0.9rem] py-[30px] px-[50px]'>
                        <button className={`flex items-center gap-[20px] !select-none text-[0.9rem] py-[8px] px-[60px] ${activeTab === 'People' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('People')}>People</button>
                    </div>
                    <div className='flex items-center gap-[16px] text-[0.9rem] py-[50px] px-[50px]'>
                    <button className={`flex items-center gap-[20px] !select-none text-[0.9rem] py-[8px] px-[50px] ${activeTab === 'Settings' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Settings')}>Settings</button>
                    </div>
                </div>
                <div className='w-[100%] overflow-y-auto'>
                    {activeTab === 'Profile' && 
                    <div className='block text-lg font-medium text-gray-700 py-2 border-b-[2px] border-grey'>My Profile
                    <div className='w-[100%] overflow-y-auto'>
                    {activeTab === 'Profile' && (
    <div className='block text-lg font-medium text-gray-700 py-1 border-b-2 border-gray-300'></div>
)}
    {activeTab === 'Profile' && (
    <div className='flex-1 gap-4 pt-4 px-20'>
        {/* Avatar Upload and Input Box */}
        <div className="flex items-start gap-2 pb-2">
            {/* Circular Avatar Button */}
            <label htmlFor="avatarUpload" className="cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder or uploaded image */}
                    <img src="placeholder.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                    {/* You can add an icon or text for uploading */}
                </div>
            </label>
            {/* Input Box */}
            <input type="file" id="avatarUpload" className="hidden" accept="image/*" style={{ width: '80px' }} />
            
            {/* Name Input Box */}
            <div className="flex flex-col w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm text-xs" />
            </div>
        </div>
        {/* Account Security */}
        <div className="mt-2 pt-2 w-full md:w-100 text-sm text-gray-700">
        <div className="text-lg font-medium text-gray-700 border-b-2 pb-2">Account Security</div>
    <div className="flex justify-between">
        <label htmlFor="email" className="block font-semibold">
            Email:
        </label>
        <button className="text-gray-700 text-xs">Change</button>
    </div>
    <p id="email" className="mt-1 text-xs">user@example.com</p>

    <div className="flex justify-between mt-2">
        <label htmlFor="password" className="block font-semibold">
            Password:
        </label>
        <button className="text-gray-700 text-xs">Change</button>
    </div>
    <button id="password" className="mt-1 text-xs">••••••••</button>
    
    <div className="flex justify-between mt-2">
        <label htmlFor="2-step-verification" className="block font-semibold">
            2-step verification:
            <p id="email" className="mt-1 text-xs font-normal">Add an additional layer of security to your account during login.</p>
        </label>
        <label htmlFor="toggle-2-step" className="flex items-center">
            <input type="checkbox" id="toggle-2-step" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
            <span className="ml-2 text-gray-700 text-xs">Enabled</span>
        </label>
    </div>
    <div className="mt-2 pt-2 w-full md:w-100 text-sm text-gray-700">
    <div className="text-lg font-medium text-gray-700 border-b-2 pb-2">Support</div>
    
    <div className="mt-2">
    <div className="flex justify-between">
        <a href="#" className="font-medium hover:underline">
            <p>Support access</p>
            <p className="text-xs text-gray-600 mt-1">Click here to manage support access.</p>
        </a>
        <label htmlFor="toggle-support-access" className="flex items-center">
            <input type="checkbox" id="toggle-support-access" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
            <span className="ml-2 text-gray-700 text-xs">Enabled</span>
        </label>
    </div>
    <div className="mt-2">
        <a href="#" className="font-medium hover:underline">
            <p>Logout of all devices</p>
            <p className="text-xs text-gray-600 mt-1">Click here to log out of all devices.</p>
        </a>
    </div>
    <div className="mt-2">
        <a href="#" className="font-medium text-red-600 hover:underline">
            <p>Delete my account</p>
            <p className="text-xs text-gray-600 mt-1">Click here to delete your account.</p>
        </a>
    </div>
</div>
</div>   
</div>
    </div>
)}
                    </div>
                </div>
                    }
                    {activeTab === 'People' && (
    <div>
        <div className="block text-lg font-medium text-gray-700 py-8 border-b-[2px] border-grey">People</div>
        <h1 className="flex text-[1rem] py-[10px] px-[60px] underline" style={{ color: 'grey' }}>Invite users</h1>
        <div className="flex text-[0.9rem] py-[10px] px-[60px]">Enable a secret link for Workspace Owners and Membership Admins to invite new members. You can also <button className="flex text-[0.9rem] py-[10px] px-[60px]" style={{textDecoration: 'underline', verticalAlign: 'baseline'}} onClick={handleGenerateLink}>Generate a new Link</button></div>
        <div className="flex items-center w-80% gap-[16px] text-[0.9rem] py-[8px] px-[10px]">
        <div className="flex items-center justify-center w-full gap-[16px] text-[0.9rem] py-[8px] px-[10px] border-b-[2px] border-gray">
    <Input type="email" placeholder="URL" disabled className="w-full max-w-md" style={{ textAlign: 'center' }} />
    <Button type="submit">Copy URL</Button>
</div>
        </div>
        <div className="flex justify-center mt-4">
            <button className="mr-4 text-gray-500 hover:text-black">Members</button>
            <button className="mr-4 text-gray-500 hover:text-black">Guests</button>
            <button className="text-gray-500 hover:text-black">Groups</button>
        </div>
    </div>
)}
                    {activeTab === 'Settings' && <div>Edit Settings</div>}
                </div>
                {showPopup && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
                <p className="mb-4">Are you sure you want to reset the invite link for all space members? Your old one will no longer be able to be used.</p>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4" onClick={handleResetLink}>Reset</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
            )}
            </DialogContent>
        </Dialog>
    );
};

export default SettingsComp;


const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}       
    />
))

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.DialogPortal>
        <DialogOverlay />

        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPrimitive.DialogPortal>
))