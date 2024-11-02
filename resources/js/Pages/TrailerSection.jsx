// src/components/TrailerSection.jsx
import React from 'react';

const TrailerSection = () => (
  <div className="max-w-2xl mx-auto p-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 text-center">Trailer</label>
      <input 
        type="text" 
        className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
        placeholder="Masukkan URL trailer" 
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Description</label>
      <textarea 
        className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
        rows="4" 
        placeholder="Add description..."
      />
    </div>

    {/* Kotak Trailer */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 text-center">Trailer URL</label>
      <input 
        type="text" 
        className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
        placeholder="Masukkan URL trailer" 
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 text-center">Trailer Video</label>
      <div className="flex justify-center">
        <iframe 
          className="rounded-lg shadow-md" 
          width="100%" 
          height="360" 
          src="https://www.youtube.com/embed/VIDEO_ID" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
      </div>
    </div>

    <div className="flex justify-center">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
    </div>
  </div>
);

export default TrailerSection;
