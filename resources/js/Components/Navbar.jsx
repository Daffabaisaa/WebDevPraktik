// import React from 'react';
// import { Link } from '@inertiajs/inertia-react'; // Impor Link dari Inertia
// import SidebarButton from './SidebarButton';
// import logo from '../../foto/logo.png';
// import SearchLogin from './HomePage/SearchLogin';


// export default function Navbar({ countrys, onSearch }) { // Pastikan countrys diteruskan sebagai properti
//   return (
//     <div className="bg-blue-950 py-3 flex items-center justify-between px-4"> {/* Gunakan flex untuk menempatkan elemen secara horizontal */}
//       {/* <SidebarButton countrys={countrys} /> */}
//       <div className='flex-none'>
//         <SidebarButton countrys={countrys} />
//       </div>
//       <div className='ml-4 flex-auto text-center'>
//         <Link href="/" className='flex-auto'>
//           <img 
//             src={logo}  // Ganti dengan path gambar yang sesuai
//             alt="Logo"
//             className="h-20 w-auto" // Sesuaikan ukuran logo sesuai kebutuhan
//           />
//         </Link>
//       </div>
//       <div className='flex-auto'>
//         <SearchLogin onSearch={onSearch}/>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from '@inertiajs/inertia-react'; // Impor Link dari Inertia
import logo from '../../foto/logo.png';

export default function Navbar(countrys) {
  return (
    <div className="bg-blue-950 py-3 flex justify-center items-center"> {/* Gunakan flex untuk posisi tengah */}
      <Link href="/" className='flex-none'>
        <img 
          src={logo}
          alt="Logo"
          className="h-20 w-auto"
        />
      </Link>
    </div>
  );
}
