import { Input, Select, Button, TextButton } from '@material-ui/core';
import { useState } from 'react';

const SearchBar = ({ setSearchTerm, setSearchBy, searchBy, listView, setListView }) => {
	const [newSearchTerm, setNewSearchTerm] = useState('');
	const [listViewName, setListViewName] = useState('post-it view');

	const changeListView = () => {
		setListView((currValue) => {
			return !currValue;
		});
		listViewName === 'list view' ? setListViewName('post-it view') : setListViewName('list view');
	};

	return (
		<div>
			<form
				className='search-bar'
				onSubmit={(event) => {
					event.preventDefault();
					setSearchTerm(newSearchTerm);
					setNewSearchTerm('');
					console.log(event.target);
				}}
			>
				<Input
					variant='outlined'
					type='text'
					placeholder="'Ponyo'"
					id='searchBar'
					value={newSearchTerm}
					onChange={(event) => {
						setNewSearchTerm(event.target.value);
					}}
				/>

				<Select
					className='select-search'
					htmlFor='searchBar'
					value={searchBy}
					onChange={(event) => {
						console.log(event.target.value);
						setSearchBy(event.target.value);
					}}
				>
					<option label='title' value='title'>
						Title
					</option>
					<option label='director' value='director'>
						Director
					</option>
					<option label='producer' value='producer'>
						Producer
					</option>
				</Select>

				<Button variant='outlined' size='small' type='submit'>
					search
				</Button>
			</form>
			<br />
			<Button size='small' className='list-view' onClick={changeListView}>
				{listViewName}
			</Button>
			<br />
		</div>
	);
};

export default SearchBar;
