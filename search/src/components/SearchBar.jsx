
  import React from 'react'
  
  const SearchBar = ({filterVal ,filterUpdate }) => {
    return (
      <form>
        <input
          type="text"
          placeholder="Type to filter.."
          value={filterVal}
          onChange={filterUpdate}
        />
      </form>
    );
  }
  
  export default SearchBar
  
  
  