import React, { useState } from 'react';import "./search.css"

import SearchIcon from '@mui/icons-material/Search';


function Search() {

    return (
        <form action="/"  className="search">

            <div className="search-icon"><SearchIcon /></div>
            <input className="search-box"  type="text" placeholder="Search" />

        </form>

    )
}

export default Search;