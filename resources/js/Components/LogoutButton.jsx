import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function LogoutButton() {
const handleLogoutClick = () => {
    Inertia.post(route('logout')); // Pastikan menggunakan route yang benar
};


  return (
    <div className="ml-4">
      <button
        onClick={handleLogoutClick}
        className="py-3 px-2 bg-red-600 hover:bg-red-800 text-white rounded-lg text-xs"
      >
        Logout
      </button>
    </div>
  );
}
