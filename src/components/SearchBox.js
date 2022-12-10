import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className='pa2 ba b--green bg-lightest-blue'
        type='search'
        placeholder="Search Characters"
        onChange={searchChange} //everytime the onchange fn is triggered, call the onSearchChange fn
      />
    </div>
  );
};

export default SearchBox;