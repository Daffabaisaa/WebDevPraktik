import React from 'react';
// import cover from '../img/Ae_Dil_Hai_Mushkil2.jpg'

export default function FilmDetail(props) {
  const film = props.props.film;
  return (
    <div className="flex flex-wrap p-6 border-slate-200 rounded-xl mt-5 shadow-lg border">
      <div className="flex items-center">
        {/* Poster Film */}
        <div>
          <a>
            <img src={film.poster_url} className="w-64 rounded-xl h-96" alt="Ae Dil Hai Mushkil Poster" />
          </a>
        </div>

        {/* Detail Film */}
        <div className="pl-5">
          <div className="bg-white flex flex-col justify-start ml-2">
            <a className="text-4xl font-bold pb-4 w-full">{film.title}</a>
            {/* <a href="#" className="text-4xl font-bold pb-4 w-96">
              {film}</a> */}
            <table>
              <tbody className="bg-white">
                <tr>
                  <td className="px-0 py-3 text-left text-lg text-black w-24">Year</td>
                  <td className="px-0 py-1 text-center text-lg text-black w-5">:</td>
                  <td className="px-0 py-3 text-left text-lg text-black">{film.year}</td>
                </tr>
              </tbody>
              <tbody className="bg-white">
                <tr>
                  <td className="px-0 py-3 text-left text-lg text-black w-24">Country</td>
                  <td className="px-0 py-1 text-center text-lg text-black w-5">:</td>
                  <td className="px-0 py-3 text-left text-lg text-black">{film.country}</td>
                </tr>
              </tbody>
              <tbody className="bg-white">
                <tr>
                  <td className="px-0 py-3 text-left text-lg text-black w-24">Genre</td>
                  <td className="px-0 py-1 text-center text-lg text-black w-5">:</td>
                  <td className="px-0 py-3 text-left text-lg text-black">
                      {film.genres.map((genre, index) => (
                        <span key={index}>{genre.pivot.genre_name}{index < film.genres.length - 1 ? ', ' : ''}</span>
                      ))}
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white">
                <tr>
                  <td className="px-0 py-3 text-left text-lg text-black w-24">Availability</td>
                  <td className="px-0 py-1 text-center text-lg text-black w-5">:</td>
                  <td className="px-0 py-3 text-left text-lg text-black">
                      {film.platforms.map((platform, index) => (
                        <span key={index}>{platform.pivot.name_platform}{index < film.platforms.length - 1 ? ', ' : ''}</span>
                      ))}
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white">
                <tr>
                  <td className="px-0 py-3 text-left text-lg text-black w-24">Actor</td>
                  <td className="px-0 py-1 text-center text-lg text-black w-5">:</td>
                  <td className="px-0 py-3 text-left text-lg text-black">
                  {film.actors.map((actor, index) => (
                        <span key={index}>{actor.name}{index < film.actors.length - 1 ? ', ' : ''}</span>
                      ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
