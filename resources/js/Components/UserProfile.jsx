// UserProfile.jsx
import React from 'react';

export default function UserProfile({ user }) {
    const profilePicUrl = user.profile_pic_url || 'https://cdn-icons-png.flaticon.com/512/456/456283.png';

    return (
        <div className="flex items-center gap-4 mr-12">
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={profilePicUrl}
                alt="User Profile"
            />
            <div className="font-medium text-white">
                <div>{user ? user.name : "Guest"}</div> {/* Tampilkan nama user atau "Guest" */}
            </div>
        </div>
    );
}
