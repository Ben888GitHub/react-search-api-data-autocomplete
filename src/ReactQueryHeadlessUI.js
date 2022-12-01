import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';

const people = [
	'Durward Reynolds',
	'Kenton Towne',
	'Therese Wunsch',
	'Benedict Kessler',
	'Katelyn Rohan'
];

function ReactQueryHeadlessUI() {
	const [selectedPerson, setSelectedPerson] = useState('');
	const [query, setQuery] = useState('');
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

	// console.log(data);

	const filteredPeople = data?.results
		.filter(
			(film) =>
				film.name?.toLowerCase().includes(queryFilm.toLowerCase()) ||
				film.original_title?.toLowerCase().includes(queryFilm.toLowerCase())
		)
		.map((film) => (
			<Combobox.Option key={film.id} value={film.name || film.original_title}>
				{film.name || film.original_title}
			</Combobox.Option>
		));

	// filteredPeople && console.log(filteredPeople);

	return (
		<Combobox value={queryFilm} onChange={setQueryFilm}>
			<Combobox.Input onChange={(event) => setQueryFilm(event.target.value)} />
			<Combobox.Options>{queryFilm && filteredPeople}</Combobox.Options>
		</Combobox>
	);
}

export default ReactQueryHeadlessUI;
