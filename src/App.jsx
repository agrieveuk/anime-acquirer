import "./App.css";
// import SearchingTitle from "./components/SearchingTitle";
import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FilmList from "./components/FilmList";

function App() {
  const [searchTerm, setSearchTerm] = useState("...");
  const [searchBy, setSearchBy] = useState("Choose");
  const [listView, setListView] = useState(false);

  return (
    <div className="App">
      <Header />
      {/* <SearchingTitle searchTerm={searchTerm}/> */}
      <SearchBar
        setSearchTerm={setSearchTerm}
        setSearchBy={setSearchBy}
        listView={listView}
        setListView={setListView}
      />
      <FilmList
        searchTerm={searchTerm}
        searchBy={searchBy}
        listView={listView}
      />
    </div>
  );
}

export default App;
