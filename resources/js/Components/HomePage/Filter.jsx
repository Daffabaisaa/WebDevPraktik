import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Filter = ({ countrys, genres, platforms }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');


  const handleFilter = (e) => {
    e.preventDefault();

    Inertia.get('/', {
      genre: selectedGenre,
      platform: selectedPlatform,
      country: selectedCountry,
    });
  };

  return (
    <div className="p-4 bg-gray-100 ml-32 mr-28 rounded-lg shadow-md mt-4 mb-4">
      <form className="flex gap-x-8 flex-wrap-nowrap justify-center" onSubmit={handleFilter}>
        {/* Genre Filter */}
        <div className="flex flex-col w-1/6">
          <label htmlFor="genre" className="block font-medium text-xs mb-1">Genre</label>
          <select id="genre" className="p-1 border border-gray-300 rounded-lg text-xs w-40"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Genre</option>
            {genres.map((genre) => (
              <option value={genre.genre_name} key={genre.id}>{genre.genre_name}</option>
            ))}
          </select>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-col w-1/6">
          <label htmlFor="platform" className="block font-medium text-xs mb-1">Availability</label>
          <select id="platform" className="p-1 border border-gray-300 rounded-lg text-xs w-40"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}>
            <option value="">Availability</option>
            {platforms.map((platform) => (
              <option value={platform.name_platform} key={platform.id}>{platform.name_platform}</option>
            ))}
          </select>
        </div>

        {/* Country Filter */}
        <div className="flex flex-col w-1/6">
          <label htmlFor="country" className="block font-medium text-xs mb-1">Country</label>
          <select id="country" className="p-1 border border-gray-300 rounded-lg text-xs w-64"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}>
            <option value="">Country</option>
            {countrys.map((country) => (
              <option value={country.country_name} key={country.id}>{country.country_name}</option>
            ))}
          </select>
        </div>


        {/* Submit Button */}
        <div className="w-full mt-4 flex justify-end">
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg text-xs w-full md:w-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
