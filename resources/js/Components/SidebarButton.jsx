// import React, { useState } from 'react';

// const SidebarButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Sidebar Button */}
//       <div className="pl-10 py-5">
//         <button
//           className="text-white bg-blue-950 hover: focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
//           type="button"
//           onClick={toggleDrawer}
//           aria-controls="drawer-navigation"
//         >
//           <svg
//             className="flex-shrink-0 w-5 h-5 text-white hover:text-gray-300 transition duration-75"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 18 18"
//           >
//             <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         id="drawer-navigation"
//         className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
//         tabIndex="-1"
//         aria-labelledby="drawer-navigation-label"
//       >
//         <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
//           CMS Menu
//         </h5>
//         <button
//           type="button"
//           onClick={toggleDrawer}
//           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
//         >
//           <svg
//             aria-hidden="true"
//             className="w-5 h-5"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <span className="sr-only">Close menu</span>
//         </button>
//         <div className="py-4 overflow-y-auto">
//           <ul className="space-y-2 font-medium">
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Countries</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Awards</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Genres</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Actors</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Comments</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Dramas</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <span className="flex-1 ms-3 whitespace-nowrap">CMS Awards</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SidebarButton;

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const SidebarButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (route) => {
    Inertia.visit(route); // Menggunakan Inertia untuk navigasi
  };

  return (
    <>
      {/* Sidebar Button */}
      <div className="pl-10 py-5">
        <button
          className="text-white bg-blue-950 hover: focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-white hover:text-gray-300 transition duration-75"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          CMS Menu
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={() => navigateTo('/countries')} // Gunakan rute Inertia.js
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">CMS Countries</span>
              </a>
            </li>
            {/* Tambahkan item menu lainnya di sini */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarButton;
