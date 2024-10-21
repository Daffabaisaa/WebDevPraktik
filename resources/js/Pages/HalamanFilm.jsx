import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import FilmDetail from '@/Components/FilmDetail';
import FilmTrailer from '@/Components/FilmTrailer';
import Comments from '@/Components/Comments';
import CommentForm from '@/Components/CommentForm';
import ListActor from "@/Components/ListActor";


function HalamanFilm(props) {  
  return (
    <div>
      <Navbar />
      <FilmDetail props={props}/>
      <FilmTrailer props={props}/>
      <ListActor props={props}/>
      <Comments />
      <CommentForm />
    </div>
  );
}

export default HalamanFilm;
