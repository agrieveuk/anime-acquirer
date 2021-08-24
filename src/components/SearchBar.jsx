import { useState } from "react";
import { TextField, Select, Button } from "@material-ui/core";

const SearchBar = ({
  setSearchTerm,
  setSearchBy,
  searchBy,
  listView,
  setListView,
}) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const changeListView = () => {
    setListView((currValue) => {
      return !currValue;
    });
  };

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
          <TextField
            type="text"
            id="searchBar"
            value={newSearchTerm}
            onChange={(event) => {
              setNewSearchTerm(event.target.value);
            }}
          />
        </label>
        <label className="search-bar">
          <Select
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
          </Select>
        </label>
        <Button type="submit">search</Button>
      </form>
      <br />
      <button className="list-view" onClick={changeListView}>
        List View
      </button>
      <br />
    </div>
  );
};

export default SearchBar;
