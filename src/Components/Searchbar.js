import React, { useState } from 'react';

function Searchbar({ handleSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');
    function handleChange(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <section className='search-bar-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search-city'>
                    <strong>Search Term: {searchTerm} </strong>
                    <br></br>
                    <input 
                    type='text'
                    placeholder='Search City'
                    id='search-city'
                    name='search-city'
                    onChange= {handleChange} 
                    ></input>
                </label>
                <button 
                type='submit' 
                className='submit-search-city'>
                    Search
                </button>
            </form>
        </section>
    )
}

export default Searchbar;