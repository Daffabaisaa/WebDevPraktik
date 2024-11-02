import React from 'react';
import { Link } from '@inertiajs/react';
import SidebarButton from './SidebarButton';
import logo from '../../foto/logo.png';
import SearchLogin from './HomePage/SearchLogin';
import LoginButton from './LoginButton';
import UserProfile from './UserProfile';
import LogoutButton from './LogoutButton';

export default function NavbarUtama({ countrys, onSearch, user }) {
  return (
    <div className="bg-blue-950 py-3 flex items-center justify-between px-4">
      <div className='flex-none'>
        {/* SidebarButton hanya ditampilkan jika user ada dan memiliki role ADMIN */}
        {user && user.role === 'ADMIN' && (
          <SidebarButton countrys={countrys} />
        )}
      </div>

      <div className='ml-4 flex items-center flex-grow'>
        <Link href="/" className='flex-none'>
          <img
            src={logo}
            alt="Logo"
            className={`h-20 w-auto ${!user || user.role === 'USER' ? 'ml-24' : ''}`}
          />
        </Link>
        <div className='ml-4 w-full'>
          <SearchLogin onSearch={onSearch} />
        </div>
        <div className='flex items-center'>
          {!user ? (
            <LoginButton />
          ) : (
            <>
              <div className='mr-2'>
                <LogoutButton />
              </div>
              <UserProfile user={user} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

