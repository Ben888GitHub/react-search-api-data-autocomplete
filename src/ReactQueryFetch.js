import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useQuery } from '@tanstack/react-query';

const formatResult = (item) => {
	// console.log(item);

	return (
		<div style={{ cursor: 'pointer' }}>
			<span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
			<span style={{ display: 'block', textAlign: 'left' }}>
				name: {item.name || item.original_title}
			</span>
		</div>
	);
};

function ReactQueryFetch() {
	const [queryFilm, setQueryFilm] = useState('');

	const fetchFilm = async () => {
		const movies = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=456ec94d71f9702ddcbbc1166b40f922&language=en-US&query=${queryFilm}`
		);
		const moviesJson = await movies.json();
		return moviesJson;
	};

	const { data } = useQuery({
		queryKey: ['films', queryFilm],
		queryFn: () => fetchFilm(queryFilm),
		enabled: Boolean(queryFilm), // this is to prevent auto-refetch
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		keepPreviousData: true
	});

	return (
		<div>
			<div style={{ width: 400, margin: 'auto' }}>
				<ReactSearchAutocomplete
					items={data?.results}
					onSearch={(film) => setQueryFilm(film)}
					// onHover={handleOnHover}
					onSelect={(film) => console.log(film)}
					// onFocus={handleOnFocus}
					autoFocus
					formatResult={formatResult}
					maxResults={10}
					placeholder="Search TV Shows or Movie"
				/>
			</div>
		</div>
	);
}

export default ReactQueryFetch;
