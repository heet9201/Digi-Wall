import React, { useState } from 'react'


const Search = ({ Query }) => {
    const [searchQuery, setSearchQuery] = useState('');
    // console.log(searchQuery);
    const searchQueryFunction = (searchQuery) => {
        // console.log(searchQuery);
        Query(searchQuery);
    };
    return (
        <>
            <div>
                <div className="relative leading-[1.5rem] font-medium">
                    <input
                        className='w-full h-full bg-transparent outline-none font-raleway'
                        type="text"
                        onChange={(e) => (setSearchQuery(e.target.value), searchQueryFunction(e.target.value))}
                        value={searchQuery}
                        placeholder="Search..."
                    />
                </div>
            </div>
        </>
    )
}

export default Search;