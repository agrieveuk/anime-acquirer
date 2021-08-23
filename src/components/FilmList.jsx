import { useState, useEffect} from 'react';


const FilmList = ({ searchTerm }) => {
  const [films, setFilms] = useState([])
  useEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => setFilms(data), console.log("<<-- returning searched films"));
  }, [searchTerm])

  return (
    <div>
      <ol>
        {films.map(film => {
          return <li key="film.title">
            <h3>{film.title}</h3>
            <h4>{film.original_title}</h4>
            <p>{[film.director + " " + film.release_date]}</p><br /></li>
        })}
      </ol>
    </div>
  );
};

export default FilmList;