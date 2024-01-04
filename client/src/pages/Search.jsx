import React from 'react';

export default function Search() {
    return (
    <div>
        <div className=''>
            <form>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap'>Search Term:</label>
                    <input type="text" 
                        id='searchTerm'
                        placeholder='Search...'
                        className='border rounded-lg p-3 w-full'
                    />
                </div>
            </form>
        </div>

        <div className=''>
            <h1>Listing results:</h1>
        </div>
    </div>
    )
}
