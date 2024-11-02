import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import SidebarButton from '@/Components/SidebarButton';

const TabelCountries = ({ countries }) => {
    const [country, setCountry] = useState('');
    const [countriesList, setCountries] = useState(countries);
    const [editCountry, setEditCountry] = useState(null); // Negara yang sedang diedit
    const [newCountryName, setNewCountryName] = useState(''); // Nama negara baru

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (country) {
            const response = await fetch('/countries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({ country_name: country }),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                setCountries([...countriesList, { country_name: country }]);
                setCountry('');
            } else {
                alert('Failed to add country');
            }
        }
    };

    const handleDelete = async (countryName) => {
        const response = await fetch(`/countries/${encodeURIComponent(countryName)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            setCountries(countriesList.filter(country => country.country_name !== countryName));
        } else {
            alert('Failed to delete country');
        }
    };

    const handleEdit = (countryName) => {
        setEditCountry(countryName);
        setNewCountryName(countryName);
    };

    console.log('nama :', newCountryName)
    console.log('nama lama :', editCountry)

    const handleUpdate = async (editCountry, newCountryName) => {
        const response = await fetch(`/countries/${encodeURIComponent(editCountry)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({ new_country_name: newCountryName }),
        });
    
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            setCountries(
                countriesList.map(country =>
                    country.country_name === editCountry ? { country_name: newCountryName } : country
                )
            );
        } else {
            alert('Failed to update country');
        }
    };
    
    
    

    return (
        <div>
            <div className='mb-4'>
                <Navbar />
            </div>
            <div className='ml-4'>
                <SidebarButton />
            </div>
            <div className="lg:mx-40 sm:mx-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-end gap-6 mb-6 md:grid-cols-2">
                        <div className="grow">
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                COUNTRY
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Input here..."
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
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
                                    Countries
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {countriesList.map((country, index) => (
                                <CountryRow 
                                    key={index} 
                                    country={country.country_name} 
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                    onUpdate={handleUpdate}
                                    editCountry={editCountry}
                                    newCountryName={newCountryName}
                                    setNewCountryName={setNewCountryName}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const CountryRow = ({ country, onDelete, onEdit, onUpdate, editCountry, newCountryName, setNewCountryName }) => {
    const isEditing = editCountry === country;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {isEditing ? (
                    <input
                        type="text"
                        value={newCountryName}
                        onChange={(e) => setNewCountryName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                ) : (
                    country
                )}
            </th>
            <td className="px-6 py-4 text-right">
                {isEditing ? (
                    <button 
                        onClick={() => onUpdate(country, newCountryName)} // Kirim juga newCountryName
                        className="font-medium text-green-600 dark:text-green-500 hover:underline"
                    >
                        Save
                    </button>
                ) : (
                    <>
                    <a href="#" onClick={() => onEdit(country)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <span className="font-medium text-slate-600 dark:text-white"> | </span>
                        <button 
                            onClick={() => onDelete(country)} 
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default TabelCountries;
