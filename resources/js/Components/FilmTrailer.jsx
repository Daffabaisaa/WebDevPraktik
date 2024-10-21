import React from 'react';



export default function FilmTrailer(props) {
  const film = props.props.film;
  
  return (
    <div className="mt-6  pt-6 m-auto bg-white">
      <div className="relative">
        {/* Link ke trailer */}
        <a href={film.trailer_url} target="_blank" rel="noopener noreferrer">
          {/* Gambar Poster dengan Efek */}
          <img
            className="rounded-lg px-20 w-full h-96 brightness-50"
            src= {film.poster_url}
          />
          {/* Overlay untuk teks Watch Trailer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold hover:text-gray-200">Watch Trailer</h2>
          </div>
        </a>
      </div>

      {/* Bagian Sinopsis */}
      <div className="ml-6 border-slate-200 rounded-xl mx-5 p-5 mt-10 shadow-md">
        <a href="#">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 uppercase">Synopsis</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          {film.synopsis}
        </p>
      </div>
    </div>
  );
}