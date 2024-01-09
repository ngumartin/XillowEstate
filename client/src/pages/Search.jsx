import React from 'react';
import { useEffect, useState } from 'react';

export default function Search() {
    const [sidebardata, setSidebardata] = useState({
        searchTerm: '',
        type: 'all',
        parking: false,
        furnished: false,
        offer: false,
        sort: 'created_at',
        order: 'desc',
    });

    const handleChange = (e) => {};

    return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
            <form className='flex flex-col gap-8'>

                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                    <input type="text" 
                        id='searchTerm'
                        placeholder='Search...'
                        className='border rounded-lg p-3 w-full'
                        value={sidebardata.searchTerm}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Type:</label>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='all' className='w-5' 
                            onChange={handleChange}
                            checked={sidebardata.type === 'all'}
                        />
                        <span>Rent & Sale</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='rent' className='w-5' 
                            onChange={handleChange}
                            checked={sidebardata.type === 'rent'}
                        />
                        <span>Rent</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='sale' className='w-5' 
                            onChange={handleChange}
                            checked={sidebardata.type === 'sale'}
                        />
                        <span>Sale</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='offer' className='w-5' 
                            onChange={handleChange}
                            checked={sidebardata.offer}
                        />
                        <span>Offer</span>
                    </div>
                </div>

                <div className='flex gap-2 flex-wrap items-center'>
                    <label className='font-semibold'>Amenities:</label>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='parking' className='w-5'
                            onChange={handleChange}
                            checked={sidebardata.parking}
                        />
                        <span>Parking</span>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" id='furnished' className='w-5' 
                            onChange={handleChange}
                            checked={sidebardata.furnished}
                        />
                        <span>Furnished</span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <label className='font-semibold'>Sort:</label>
                    <select id="sort_order" className='border rounded-lg p-3'>
                        <option>Price high to low</option>
                        <option>Price low to high</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Search</button>
            </form>
        </div>

        <div className=''>
            <h1 className='text-3xl font-semibold border-b p-3 mt-5 text-slate-700'>Listing results:</h1>
        </div>
    </div>
    )
}
