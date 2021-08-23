import './App.css';
import SearchingTitle from './components/SearchingTitle'
import Header from './components/Header'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilmList from './components/FilmList';

function App() {
  const [searchTerm, setSearchTerm] = useState('...');

  return (
    <div className="App">
      <Header />
      {/* <SearchingTitle searchTerm={searchTerm}/> */}
      <SearchBar setSearchTerm={setSearchTerm} />
      <FilmList searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
