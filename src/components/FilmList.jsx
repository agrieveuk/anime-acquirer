import { useState, useEffect } from "react";

const FilmList = ({ searchTerm, searchBy, listView }) => {
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

  const handleLink = () => {
    <a href={'https://www.google.com/search?q=' + searchTerm}></a>;
  }

  if (isLoading) {
    return <p>Finding films...</p>;
  }

  if (films.length === 0) {
    return <p>Nothing Found</p>;
  }

  return (
    <div className="list-container">
      <ol className={listView ? "films" : "films-post-it"}>
        {films.map((film) => {
          return (
						<li key='film.id' className={listView ? 'films-li' : 'films-li-post-it'}>
							<div className='results-text'>
								<a className='link' href={'https://www.google.com/search?q=' + film.title}>
								<h3>{film.title}</h3>
								<h4>{film.original_title}</h4>
								<p>{[film.director + ' ' + film.release_date]}</p></a>
							</div>

							<br />
						</li>
					);
        })}
      </ol>
    </div>
  );
};

export default FilmList;
