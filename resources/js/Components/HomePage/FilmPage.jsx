// import React from 'react';
// import SearchLogin from './SearchLogin';
// import FilmList from './FilmList';
// import SidebarButton from '../SidebarButton';
// import Filter from './Filter';

// const FilmPage = ({ countrys, films, genres, platforms, onSearch }) => {
//   return (
//     <div>
//       <SidebarButton countrys={countrys}/>
//       <SearchLogin onSearch={onSearch} />
//       <Filter countrys={countrys} genres={genres} platforms={platforms} />
//       <FilmList films={films} />
//     </div>
//   );
// };

// export default FilmPage;

import React from 'react';
import FilmList from './FilmList';
import Filter from './Filter';
import SearchLogin from './SearchLogin';

const FilmPage = ({ countrys, films, genres, platforms, onSearch }) => {
  return (
    <div>
      {/* <SearchLogin countrys={countrys} onSearch={onSearch} /> */}
      <Filter countrys={countrys} genres={genres} platforms={platforms} />
      <FilmList films={films} />
    </div>
  );
};

export default FilmPage;
