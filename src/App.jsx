import "./App.css";
import SearchingTitle from "./components/SearchingTitle";
import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FilmList from "./components/FilmList";

function App() {
  const [searchTerm, setSearchTerm] = useState("...");
  const [searchBy, setSearchBy] = useState("");

  return (
    <div className="App">
      <Header />
      {/* <SearchingTitle searchTerm={searchTerm}/> */}
      <SearchBar setSearchTerm={setSearchTerm} setSearchBy={setSearchBy} />
      <FilmList searchTerm={searchTerm} searchBy={searchBy} />
    </div>
  );
}

export default App;
