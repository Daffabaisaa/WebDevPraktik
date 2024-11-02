import React from 'react';

export default function FilmList({ films }) {
    return (
        <div className="w-full max-w-screen-lg mx-32 mt-4">
            <div className="grid grid-cols-4 gap-6">
                {films && films.length > 0 ? (
                    films.map((film, i) => (
                        <a href={`/film/`+film.film_id} key={i}>
                          <div className="relative group rounded-lg overflow-hidden w-full h-80 z-10">
                            <img
                              className="cursor-pointer transition-transform duration-300 ease-in-out w-full h-full rounded-xl shadow-xl group-hover:scale-110 object-cover"
                              src={film.poster_url}
                              alt={film.title}
                            />
                            
                            {/* Overlay yang muncul saat hover */}
                            <div className="absolute inset-0 bg-blue-950 bg-opacity-90 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <h3 className="text-white text-lg font-semibold">{film.country}</h3>
                              <p className="text-sm text-white">{film.year}</p>
                              <p className="text-sm text-white">{film.genres.map(genre => genre.genre_name).join(', ')}</p>
                            </div>
                          </div>
                          <div className="mt-2 text-center">
                               <h3 className="text-lg font-semibold">{film.title}</h3>
                          </div>
                        </a>
                    ))
                ) : (
                    <p>No films available.</p>
                )}
            </div>
        </div>
    );
}
