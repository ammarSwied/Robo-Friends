import React from "react";

const SearchBox = ({ searchChange }) => {

    return (

        <div className="pa2">

            <input 
            type="search"
            placeholder="Search Robot"
            className=" tc f4 no-underline br-pill ph3 
            pv4 mb2 dib black bg-light-green ba b--white" 
            onChange={searchChange}           
            />

        </div>

    );

}

export default SearchBox;