import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

const FilmList = ({ searchTerm, searchBy, listView, setListView }) => {
	const [films, setFilms] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [listViewName, setListViewName] = useState('post-it view');

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://ghibliapi.herokuapp.com/films?${searchBy}=${searchTerm}`)
			.then((response) => response.json())
			.then((data) => {
				setFilms(data);
				console.log('<<-- returning searched films');
				setIsLoading(false);
			});
	}, [searchTerm, searchBy]);

	if (isLoading) {
		return <p>Finding films...</p>;
	}

	if (films.length === 0) {
		return <p>Nothing Found</p>;
	}

	const changeListView = () => {
		setListView((currValue) => {
			return !currValue;
		});
		listViewName === 'list view' ? setListViewName('post-it view') : setListViewName('list view');
	};

	return (
		<div className='list-container'>
			<br />
			<Button size='small' className='list-view' onClick={changeListView}>
				{listViewName}
			</Button>
			<br />

			<ol className={listView ? 'films' : 'films-post-it'}>
				{films.map((film) => {
					return (
						<li key='film.id' className={listView ? 'films-li' : 'films-li-post-it'}>
							<div className='results-text'>
								<a className='link' href={'https://www.google.com/search?q=' + film.title}>
									<h3>{film.title}</h3>
									<h4>{film.original_title}</h4>
									<p>{[film.director + ' ' + film.release_date]}</p>
								</a>
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
