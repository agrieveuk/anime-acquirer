import { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState('');

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        setSearchTerm(newSearchTerm)
        setNewSearchTerm('')
      }}>
        <label className="search-bar">
          <input
            type="text"
            value={newSearchTerm}
            onChange={(event) => {
              setNewSearchTerm(event.target.value);
            }}
          />
        </label>
        <button type="submit" >search</button>
      </form>
      <br /><br />
    </div>
  );
};

export default SearchBar;
