import React from 'react';

const TabelActors = () => {
    const actors = [
        {
            no: 1,
            country: 'India',
            name: 'Ranbir Kapoor',
            photo: 'ranbir kapoor.jpg',
        },
        {
            no: 2,
            country: 'India',
            name: 'Ranbir Kapoor',
            photo: 'ranbir kapoor.jpg',
        },
        {
            no: 3,
            country: 'India',
            name: 'Ranbir Kapoor',
            photo: 'ranbir kapoor.jpg',
        },
    ];

    return (
        <div>
            {/* Input Form */}
            <form>
                <div>
                    <div className="flex flex-wrap items-end gap-6 mb-6 md:grid-cols-2 lg:mx-40 sm:mx-10">
                        <div className="flex gap-6">
                            <div className="grow">
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input here..."
                                    required
                                />
                            </div>
                            <div className="grow w-80">
                                <label htmlFor="actor_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actor Name</label>
                                <input
                                    type="text"
                                    id="actor_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input here..."
                                    required
                                />
                            </div>
                            <div className="grow">
                                <label htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birth</label>
                                <input
                                    type="text"
                                    id="birth"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input here..."
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mb-6 md:grid-cols-2 lg:mx-40 sm:mx-10">
                        <div className="grow">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_upload">Upload Picture</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                id="file_upload"
                                type="file"
                            />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 400x800px).</p>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            {/* Data Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:mx-40 sm:mx-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-50 uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-4">No</th>
                            <th scope="col" className="px-6 py-3">Countries</th>
                            <th scope="col" className="px-6 py-3">Actor Name</th>
                            <th scope="col" className="px-6 py-3">Photos</th>
                            <th scope="col" className="px-6 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors.map((actor) => (
                            <tr key={actor.no} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-2 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{actor.no}</th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{actor.country}</th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{actor.name}</th>
                                <td className="p-4">
                                    <img src={actor.photo} className="w-16 md:w-32 max-w-full max-h-full" alt={actor.name} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-slate-600 dark:text-white hover:underline">|</a>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TabelActors;
