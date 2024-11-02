import React from 'react';
import Navbar from '@/Components/Navbar';
import FilmDetail from '@/Components/FilmDetail';
import FilmTrailer from '@/Components/FilmTrailer';
import Comments from '@/Components/Comments';
import CommentForm from '@/Components/CommentForm';
import ListActor from "@/Components/ListActor";

function HalamanFilm(props) {
  const { film, auth } = props; // pastikan `auth` tersedia di props

  return (
    <div>
      <Navbar />
      <FilmDetail props={props}/>
      <FilmTrailer props={props}/>
      <ListActor props={props}/>
      <Comments />

      {/* Hanya tampilkan CommentForm jika user sudah login */}
      {auth.user ? (
        <CommentForm filmId={film.film_id} userId={auth.user.id}/>
      ) : (
        <p>Login untuk memberi komentar.</p>
      )}
    </div>
  );
}

export default HalamanFilm;
