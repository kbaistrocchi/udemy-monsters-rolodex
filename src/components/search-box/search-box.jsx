import React from 'react';
import './search-box.css';

// all props get passed in as one big object
// we can de-structure to give the parts of the objects names
// in this case, placeholder and handleChange

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
) 