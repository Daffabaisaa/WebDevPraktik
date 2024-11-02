import React, { useState } from 'react';

const TabelGenres = () => {
    const [genre, setGenre] = useState('');
    const [genres, setGenres] = useState([
        { name: 'Romance' },
        { name: 'Drama' },
        { name: 'Action' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (genre) {
            setGenres([...genres, { name: genre }]);
            setGenre('');
        }
    };

    return (
        <div className="lg:mx-40 sm:mx-10">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap items-end gap-6 mb-6 md:grid-cols-2">
                    <div className="grow">
                        <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Genre
                        </label>
                        <input
                            type="text"
                            id="genre"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input here..."
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-50 uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Genres
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres.map((genre, index) => (
                            <GenreRow key={index} genre={genre.name} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const GenreRow = ({ genre }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {genre}
            </th>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <span className="font-medium text-slate-600 dark:text-white"> | </span>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
            </td>
        </tr>
    );
};

export default TabelGenres;
