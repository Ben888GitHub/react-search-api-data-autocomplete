// import { useEffect, useState } from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './App.css';
import ReactQueryFetch from './ReactQueryFetch';

// const items = [
// 	{
// 		id: 0,
// 		name: 'Cobol'
// 	},
// 	{
// 		id: 1,
// 		name: 'JavaScript'
// 	},
// 	{
// 		id: 2,
// 		name: 'Basic'
// 	},
// 	{
// 		id: 3,
// 		name: 'PHP'
// 	},
// 	{
// 		id: 4,
// 		name: 'Java'
// 	}
// ];

// const formatResult = (item) => {
// 	return (
// 		<>
// 			<span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
// 			<span style={{ display: 'block', textAlign: 'left' }}>
// 				name: {item.name}
// 			</span>
// 		</>
// 	);
// };

function App() {
	// const [searchMovies, setSearchMovies] = useState([]);
	// const [queryFilm, setQueryFilm] = useState('');

	// const fetchMovies = async () => {
	// 	const getMovies = await fetch(
	// 		`https://api.themoviedb.org/3/search/multi?api_key=456ec94d71f9702ddcbbc1166b40f922&language=en-US&query=${queryFilm}`
	// 	).then((r) => r.json());
	// 	console.log(getMovies);
	// 	setSearchMovies(getMovies);
	// };

	// useEffect(() => {
	// 	queryFilm && fetchMovies();
	// }, [queryFilm]);

	return (
		<div className="App">
			<h1>Search Movie / TV Shows </h1>
			<br />
			{/* <div style={{ width: 400, margin: 'auto' }}>
				<ReactSearchAutocomplete
					items={searchMovies.results}
					onSearch={(film) => setQueryFilm(film)}
					// onHover={handleOnHover}
					onSelect={(film) => console.log(film)}
					// onFocus={handleOnFocus}
					autoFocus
					formatResult={formatResult}
					maxResults={10}
				/>
			</div> */}
			<ReactQueryFetch />
		</div>
	);
}

export default App;
