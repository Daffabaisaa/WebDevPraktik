import React from 'react';

const TabelAwards = () => {
    return (
        <div>
            {/* Form Input */}
            <form>
                <div>
                    <div className="flex flex-wrap items-end gap-6 mb-6 md:grid-cols-2 lg:mx-40 sm:mx-10">
                        <div className="flex gap-6">
                            <div className="w-96">
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input here..."
                                    required
                                />
                            </div>
                            <div className="grow">
                                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Year
                                </label>
                                <input
                                    type="text"
                                    id="year"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Input here..."
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-end gap-6 mb-6 md:grid-cols-2 lg:mx-40 sm:mx-10">
                        <div className="grow">
                            <label htmlFor="awards" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Awards
                            </label>
                            <input
                                type="text"
                                id="awards"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Input here..."
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
                </div>
            </form>

            {/* Tabel Data */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:mx-40 sm:mx-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-50 uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-4">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Countries
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Years
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Awards
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(3).fill().map((_, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-2 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    India
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2019
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Golden Globe Awards
                                </th>
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

export default TabelAwards;
