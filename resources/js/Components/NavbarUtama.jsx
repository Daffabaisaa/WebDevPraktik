import React from 'react';
import { Link } from '@inertiajs/inertia-react'; // Impor Link dari Inertia
import SidebarButton from './SidebarButton';
import logo from '../../foto/logo.png';
import SearchLogin from './HomePage/SearchLogin';
import LoginButton from './LoginButton';
import UserProfile from './UserProfile';

export default function NavbarUtama({ countrys, onSearch }) { 
  return (
    <div className="bg-blue-950 py-3 flex items-center justify-between px-4">
      {/* SidebarButton */}
      <div className='flex-none'>
        <SidebarButton countrys={countrys} />
      </div>

      {/* Logo dan Search bar dalam satu flex row */}
      <div className='ml-4 flex items-center flex-grow'>
        <Link href="/" className='flex-none'>
          <img 
            src={logo}
            alt="Logo"
            className="h-20 w-auto"
          />
        </Link>
        <div className='ml-4 w-full'>
          <SearchLogin onSearch={onSearch} />
        </div>
        <div className='mr-2'>
          <LoginButton/>
        </div>
        <div className='flex-none'>
          <UserProfile/>
        </div>
      </div>
    </div>
  );
}
