// import React from 'react'

// export default function LoginButton() {
//   return (
//     <div>
//       <div className="ml-4">
//         <a href="login.html" className="py-3 px-2 bg-blue-800 hover:bg-blue-950 text-white rounded-lg text-xs">Login</a>
//     </div>
//     </div>
//   )
// }

import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function LoginButton() {
  const handleLoginClick = () => {
    Inertia.visit('/login');
  };

  return (
    <div>
      <div className="ml-4">
        <button
          onClick={handleLoginClick}
          className="py-3 px-2 bg-blue-800 hover:bg-blue-950 text-white rounded-lg text-xs"
        >
          Login
        </button>
      </div>
    </div>
  );
}
