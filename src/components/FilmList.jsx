import { useState, useEffect } from "react";

const FilmList = ({ searchTerm, searchBy }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ghibliapi.herokuapp.com/films?${searchBy}=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
        console.log("<<-- returning searched films");
        setIsLoading(false);
      });
  }, [searchTerm, searchBy]);

  if (isLoading) {
    return <p>Finding films...</p>;
  }

  return (
    <div>
      <ol>
        {films.map((film) => {
          return (
            <li key="film.id">
              <h3>{film.title}</h3>
              <h4>{film.original_title}</h4>
              <p>{[film.director + " " + film.release_date]}</p>
              <br />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FilmList;
