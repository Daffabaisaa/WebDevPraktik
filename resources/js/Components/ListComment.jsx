import React from 'react';

export default function ListComment() {
  return (
    <div>
      {/* Komentar */}
      <div className="space-y-4">
        <div className="flex">
          <div className="rounded-full bg-sky-600 text-white flex items-center justify-center w-8 h-8">
            D
          </div>
          <div className="flex-grow ml-2">
            Daffa (30/08/2024) Said : This Movie is Awesome
            <div>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}
