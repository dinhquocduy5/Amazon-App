import React from 'react'
import './Filter.css'

function Filter({handleSearch}) {

    function onChange(name){
        
    }
    return (
        <aside className="form__filter">
            <h2>Sort By :</h2>
            <form action="/">
                <input type="text" className="text-name" placeholder="Search any products..." onChange={onChange}/>
                <label name="Sort by name">Sort by name</label>
                <select className="form__option">
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <label name="Sort by price">Sort by name</label>
                <select className="form__option">
                    <option value="low to high">Low to high</option>
                    <option value="high to low">High to low</option>
                </select>
            </form>
        </aside>
    )
}

export default Filter
