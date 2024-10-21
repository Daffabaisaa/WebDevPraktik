import React from 'react';

const CastList = (props) => {
  const film = props.props.film;

  return (
    <div className="m-6 p-6 shadow-md text-3xl font-bold mb-2">
      <div className="text-3xl font-bold mb-4">
        CAST
      </div>
      <div className="grid grid-cols-3 gap-8 lg:mx-15 md:grid-cols-5">
        {/* Looping melalui aktor yang ada */}
        {film.actors.map((actor, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg "
          >
            {/* Menampilkan foto aktor */}
            <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
              <img
                className="object-cover w-full h-full"
                src={actor.photo_url} // URL gambar aktor dari data
                alt={actor.name} // Nama aktor sebagai alt text
              />
            </div>
            {/* Menampilkan nama aktor */}
            <div className="font-bold text-center text-lg lg:text-2xl">
              {actor.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastList;
