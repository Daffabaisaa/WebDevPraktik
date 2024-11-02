// import React, { useState } from 'react';

// export default function Comments() {
//   // Mengelola state untuk dropdown visibility
//   const [rating, setRating] = useState('');

//   const handleRatingChange = (e) => {
//     setRating(e.target.value);
//   };

//   return (
//     <div>
//       {/* Dropdown Rating */}
//       <div className="mb-6  max-w-sm">
//         <label htmlFor="rating" className="block mb-2 font-semibold text-gray-900 dark:text-white">
//           Rating
//         </label>
//         <select
//           id="rating"
//           value={rating}
//           onChange={handleRatingChange}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         >
//           <option value="" disabled selected>
//             ⭐...
//           </option>
//           <option value="1">⭐</option>
//           <option value="2">⭐⭐</option>
//           <option value="3">⭐⭐⭐</option>
//           <option value="4">⭐⭐⭐⭐</option>
//           <option value="5">⭐⭐⭐⭐⭐</option>
//         </select>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function Comments({ value, onChange }) {
  // Mengelola state untuk rating jika komponen ini tidak dikendalikan dari luar
  const [rating, setRating] = useState(value || '');

  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
    if (onChange) onChange(e); // Memanggil fungsi onChange dari props jika diberikan
  };

  return (
    <div>
      {/* Dropdown Rating */}
      <div className="mb-6 max-w-sm">
        <label htmlFor="rating" className="block mb-2 font-semibold text-gray-900 dark:text-white">
          Rating
        </label>
        <select
          id="rating"
          value={rating} // Menggunakan "value" untuk mengontrol pilihan rating
          onChange={handleRatingChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            ⭐...
          </option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    </div>
  );
}
