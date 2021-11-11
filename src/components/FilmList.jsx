import { useState, useEffect } from "react";

const FilmList = ({ searchTerm, searchBy }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listView, setListView] = useState(false);

  const changeListView = () => {
    setListView((currValue) => {
      return !currValue;
    });
  };

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

  if (films.length === 0) {
    return <p>Nothing Found</p>;
  }

  return (
    <section>
      <div className="button-container">
        <button className="list-view" onClick={changeListView}>
          List View
        </button>
      </div>
      <ol className={listView ? "films" : "films-post-it"}>
        {films.map((film) => {
          return (
            <li
              key="film.id"
              className={listView ? "films-li" : "films-li-post-it"}
            >
              <div className="results-text">
                <h3>{film.title}</h3>
                <h4>{film.original_title}</h4>
                <p>{[film.director + " " + film.release_date]}</p>
              </div>

              <br />
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default FilmList;
