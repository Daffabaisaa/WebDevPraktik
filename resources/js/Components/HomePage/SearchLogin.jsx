import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import SidebarButton from '../SidebarButton';

const SearchLogin = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    
    // Menggunakan Inertia untuk mengirimkan parameter pencarian ke backend
    Inertia.visit('/', { 
      method: 'get', 
      data: { search: searchTerm }, 
      preserveState: true 
    });
  };

  return (
    // <div className="flex justify-center items-center h-32 bg-gray-100">
    //   {/* <SidebarButton countrys={countrys} /> */}
    //   <div className="flex justify-center items-center w-full">
        <div className="flex items-center mr-16">
          <input
            type="text"
            placeholder="Cari film atau aktor..."
            className="w-96 p-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-800 hover:bg-blue-950 text-white rounded-lg" onClick={handleSearch}>
            Cari
          </button>
        </div>
    //   </div>
    // </div>
  );
};

export default SearchLogin;

