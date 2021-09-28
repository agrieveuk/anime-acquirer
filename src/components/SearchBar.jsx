import { useState } from "react";
import { TextField, Select, Button } from "@material-ui/core";

const SearchBar = ({
  setSearchTerm,
  setSearchBy,
  searchBy,
  listView,
  setListView,
}) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  const [listViewName, setListViewName] = useState('Post-It View')

  const changeListView = () => {
    setListView((currValue) => {
      return !currValue;
    });
    if (listViewName === 'Post-It View') {
      setListViewName('List View')
    } else setListViewName('Post-It View')
  };

  return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setSearchTerm(newSearchTerm);
					setNewSearchTerm('');
					console.log(event.target);
				}}
			>
				<label className='search-bar'>
					<TextField
						type='text'
						id='searchBar'
						value={newSearchTerm}
						onChange={(event) => {
							setNewSearchTerm(event.target.value);
						}}
					/>
				</label>
				<label className='search-bar'>
					<Select
						htmlFor='searchBar'
						value={searchBy}
						onChange={(event) => {
							console.log(event.target.value);
							setSearchBy(event.target.value);
						}}
					>
						<option title='title' value='title'>
							Title
						</option>
						<option title='director' value='director'>
							Director
						</option>
						<option title='producer' value='producer'>
							Producer
						</option>
					</Select>
				</label>
				<Button type='submit'>search</Button>
			</form>
			<br />
			<button className='list-view' onClick={changeListView}>
				{listViewName}
			</button>
			<br />
		</div>
	);
};

export default SearchBar;
