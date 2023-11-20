import React from 'react'

export default function CreateListing() {
    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>
                Create a Listing
            </h1>
            <form className='flex flex-col sm:flex-row gap-6'>

                <div className='flex flex-col gap-4 flex-1'>
                    <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required />
                    <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id='description' required />
                    <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' required />

                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input  
                                type="checkbox" 
                                id='sale' 
                                className='w-5' 
                            />
                            <span>For Sale</span>
                        </div>
                            <div className='flex gap-2'>
                            <input 
                                type="checkbox" 
                                id='rent' 
                                className='w-5' 
                            />
                            <span>Rent</span>
                        </div>
                        <div className='flex gap-2'>
                            <input 
                                type="checkbox" 
                                id='parking' 
                                className='w-5' 
                                />
                            <span>Parking Spot</span>
                        </div>
                        <div className='flex gap-2'>
                            <input  
                                type="checkbox" 
                                id='furnished' 
                                className='w-5' 
                            />
                            <span>Furnished</span>
                        </div>
                        <div className='flex gap-2'>
                            <input 
                                type="checkbox" 
                                id='offer' 
                                className='w-5' 
                            />
                            <span>Sale Pending</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2'>
                            <input 
                                type="number" 
                                id='bedrooms' 
                                min='1' 
                                max='15' 
                                required
                                className='p-3 border border-gray-300 rounded-lg'
                            />
                            <p>Bedrooms</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type="number" 
                                id='bathrooms' 
                                min='1' 
                                max='15' 
                                required 
                                className='p-3 border border-gray-300 rounded-lg'
                            />
                            <p>Bathrooms</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type="number" 
                                id='regularPrice' 
                                min='1' 
                                max='15' 
                                required 
                                className='p-3 border border-gray-300 rounded-lg'
                            />
                            <div className='flex flex-col items-center'>
                                <p>Regular Price</p>
                                <span className='text-sm'>($ / Month)</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type="number" 
                                id='discountPrice' 
                                min='1' 
                                max='15' 
                                required 
                                className='p-3 border border-gray-300 rounded-lg'
                            />
                            <div className='flex flex-col items-center'>
                                <p>Discounted Price</p>
                                <span className='text-sm'>($ / Month)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1 gap-4'>
                    <p className='font-semibold'>
                        Images:
                        <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                    </p>
                    <div className='flex gap-4'>
                        <input className='p-3 border border-gray-400 rounded w-full' type="file" id='images' accept='image/*' multiple />
                        <button className='p-3 font-semibold text-green-800 border border-green-800 rounded uppercase hover:bg-gray-300 disabled:opacity-80'>Upload</button>
                    </div>
                    <button className='p-3 bg-slate-600 text-white rounded-lg uppercase hover:opacity-80 disabled:opacity-40'>Create Listing</button>
                </div>
            </form>
        </main>
    );
};
