import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input className="input-form" onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox
