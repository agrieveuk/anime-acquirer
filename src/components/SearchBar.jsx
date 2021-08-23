import { useState } from "react";

const SearchBar = ({ setSearchTerm, setSearchBy, searchBy }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearchTerm(newSearchTerm);
          setNewSearchTerm("");
          console.log(event.target);
        }}
      >
        <label className="search-bar">
          <input
            type="text"
            id="searchBar"
            value={newSearchTerm}
            onChange={(event) => {
              setNewSearchTerm(event.target.value);
            }}
          />
        </label>
        <label className="search-bar">
          <select
            htmlFor="searchBar"
            value={searchBy}
            onChange={(event) => {
              console.log(event.target.value);
              setSearchBy(event.target.value);
            }}
          >
            <option value="director">Director</option>
            <option value="title">Title</option>
            <option value="producer">Producer</option>
          </select>
        </label>
        <button type="submit">search</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default SearchBar;
