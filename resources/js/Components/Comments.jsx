import React, { useState } from 'react';
// import ListComment from './ListComment';
import RatingFilter from './RatingFilter';
import ListComment from './ListComment';


export default function Comments() {
  // Mengelola state untuk dropdown visibility
  const [rating, setRating] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  // Membuat array untuk loop
  const numberOfComments = 5;
  const commentsArray = Array.from({ length: numberOfComments }, (_, index) => index);

  return (
    <div className="mx-6 mt-10 border-slate-200 rounded-xl p-5 shadow-md">
      <div className="relative flex flex-col">
        {/* Judul Komentar */}
        <div className="p-2 py-2 font-semibold rounded-xl shadow-md mb-4">
          (4) Komentar
        </div>

        {/* Dropdown Rating */}
        <div>
          <RatingFilter/>
        </div>

        <div>
          {commentsArray.map((_, index) => (
            <ListComment key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
