import React, { createContext, useState } from 'react'

export const SearchContext = createContext();

function SearchProvider(props) {
    const [searchItem, setSearchItem] = useState("");
    return (
        <SearchContext.Provider value = {[searchItem, setSearchItem]}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider
