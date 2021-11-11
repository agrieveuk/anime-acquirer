import "./App.css";
// import SearchingTitle from "./components/SearchingTitle";
import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FilmList from "./components/FilmList";
import Graph from "./components/Graph";

function App() {
  const [searchTerm, setSearchTerm] = useState("...");
  const [searchBy, setSearchBy] = useState("");
  const [graphView, setGraphView] = useState(true);

  return (
    <div className="App">
      <Header />
      {/* <SearchingTitle searchTerm={searchTerm}/> */}
      <SearchBar
        setSearchTerm={setSearchTerm}
        setSearchBy={setSearchBy}
        setGraphView={setGraphView}
      />
      {graphView ? (
        <Graph />
      ) : (
        <FilmList searchTerm={searchTerm} searchBy={searchBy} />
      )}
    </div>
  );
}

export default App;
