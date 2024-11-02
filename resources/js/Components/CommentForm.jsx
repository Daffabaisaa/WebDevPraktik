// import React, { useState } from 'react';
// import RatingFilter from './RatingFilter';

// export default function CommentForm() {
//   // State untuk menyimpan komentar dan rating
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState('');

//   // Fungsi untuk menangani perubahan input
//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleRatingChange = (e) => {
//     setRating(e.target.value);
//   };

//   // Fungsi untuk submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic untuk submit form, misalnya mengirim komentar dan rating ke backend
//     console.log('Comment:', comment);
//     console.log('Rating:', rating);
//     // Reset form setelah submit
//     setComment('');
//     setRating('');
//   };

//   return (
//     <div className="border-slate-200 font-semibold rounded-xl mx-6 p-5 mt-10 shadow-md">
//       <form onSubmit={handleSubmit}>
//         <div className='mb-4'>
//         <label htmlFor="text">
//           <span>Your Thoughts</span>
//           <input
//             type="text"
//             id="text"
//             value={comment}
//             onChange={handleCommentChange}
//             placeholder="Masukkan Komentar"
//             className="mt-2 w-full border shadow-md p-2 pl-2 rounded-md block"
//           />
//         </label>
//         </div>

//         <div>
//           <RatingFilter/>
//         </div>

//         <button
//           type="submit"
//           className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>

//         <hr className="mt-24 border-t-4" />

//       </form>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import RatingFilter from './RatingFilter';

// export default function CommentForm({ filmId, userId }) {
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Mencegah form mengirimkan request GET secara default
//     console.log("Form submitted"); // Untuk memastikan onSubmit dipicu
//     console.log("Comment:", comment, "Rating:", rating); // Cek data sebelum fetch
//     console.log("Film ID:", filmId);
//     console.log("Sending comment:", comment, "with rating:", rating);


//     try {
//       const response = await fetch(`/film/${filmId}/comment`, {
//           method: 'post',
//           headers: {
//               'Content-Type': 'application/json',
//               'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
//           },
//           body: JSON.stringify({
//               comment: comment,
//               rating: rating,
//           }),
//       });
      
//         console.log(response.status);

//         if (response.ok) {
//             const data = await response.json();
//             alert(data.message);
//             setComment('');
//             setRating('');
//         } else {
//             const errorText = await response.text();
//             console.error('Error response:', errorText);
//             alert('Gagal menambahkan komentar.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Terjadi kesalahan saat mengirim komentar.');
//     }
// };

//   return (
//     <div className="border-slate-200 font-semibold rounded-xl mx-6 p-5 mt-10 shadow-md">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="text">
//             <span>Your Thoughts</span>
//             <input
//               type="text"
//               id="text"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Masukkan Komentar"
//               className="mt-2 w-full border shadow-md p-2 pl-2 rounded-md block"
//             />
//           </label>
//         </div>

//         <div>
//           <RatingFilter value={rating} onChange={(e) => setRating(e.target.value)} />
//         </div>

//         <button
//           type="submit"
//           className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>

//         <hr className="mt-24 border-t-4" />
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import RatingFilter from './RatingFilter';

export default function CommentForm({ filmId, userId }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah form mengirimkan request GET secara default
    console.log("Form submitted"); // Untuk memastikan onSubmit dipicu
    console.log("Comment:", comment, "Rating:", rating); // Cek data sebelum fetch
    console.log("Film ID:", filmId);
    console.log("User ID:", userId); // Cek userId untuk memastikan nilainya

    try {
      const response = await fetch(`/film/${filmId}/comment`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({
              comment: comment,
              rating: rating,
              userId: userId, // Sertakan userId dalam body permintaan
          }),
      });

      console.log(response.status);

      if (response.ok) {
          const data = await response.json();
          alert(data.message);
          setComment('');
          setRating('');
      } else {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          alert('Gagal menambahkan komentar.');
      }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim komentar.');
    }
  };

  return (
    <div className="border-slate-200 font-semibold rounded-xl mx-6 p-5 mt-10 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="text">
            <span>Your Thoughts</span>
            <input
              type="text"
              id="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Masukkan Komentar"
              className="mt-2 w-full border shadow-md p-2 pl-2 rounded-md block"
            />
          </label>
        </div>

        <div>
          <RatingFilter value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>

        <button
          type="submit"
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <hr className="mt-24 border-t-4" />
      </form>
    </div>
  );
}

