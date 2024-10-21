import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import FilmPage from '@/Components/HomePage/FilmPage';
import NavbarUtama from '@/Components/NavbarUtama';

export default function Homepage(props) {
    const filmData = props.films.data; // Ambil data film dari props
    const pagination = props.films.links; // Ambil link pagination
    const countryData = props.countrys;
    const genreData = props.genres;
    const platformData = props.platforms;

    return (
        <>
            <div>
                <Head title={props.title} />
                <NavbarUtama countrys={countryData} />
                {/* {console.log(countryData)} */}
                {/* Berikan filmData ke FilmPage */}
                <FilmPage countrys={countryData} films={filmData}  genres={genreData} platforms={platformData} />                
                {/* Render Pagination */}
                <div className="flex justify-center mt-4 mb-4">
                    {pagination.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`mx-1 px-3 py-2 border rounded ${
                                link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }} // Menampilkan label pagination (Previous, Next, angka)
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
