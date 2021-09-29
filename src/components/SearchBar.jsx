import { Input, Select, Button } from '@material-ui/core';
import { useState } from 'react';

const SearchBar = ({ setSearchTerm, setSearchBy, searchBy, setListView }) => {
	const [newSearchTerm, setNewSearchTerm] = useState('');

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
					<option label='Title' value='title'>
						Title
					</option>
					<option label='Director' value='director'>
						Director
					</option>
					<option label='Producer' value='producer'>
						Producer
					</option>
				</Select>

				<Button variant='outlined' size='small' type='submit'>
					search
				</Button>
			</form>
		</div>
	);
};

export default SearchBar;
