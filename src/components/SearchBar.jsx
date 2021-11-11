import { useState } from "react";
import { TextField, Select, Button } from "@material-ui/core";

const SearchBar = ({ setSearchTerm, setSearchBy, searchBy, setGraphView }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const toggleGraph = () => {
    setGraphView((currValue) => {
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
      <div className="button-container">
        <button className="graph-button" onClick={toggleGraph}>
          V i s u a l i s e
        </button>
      </div>
      <br />
    </div>
  );
};

export default SearchBar;
