import { getMoviesByQuery } from '@/actions/getMovies';

interface SearchResultsProps {
	query: string | null;
}
const SearchResults = async ({ query }: SearchResultsProps) => {
	const results = await getMoviesByQuery(query!);
	return (
		<div className="flex min-h-screen flex-col items-center justify-between py-8 pt-6 pb-20">
			<h3>SearchResults:</h3>
			{results.map((movie) => (
				<div key={movie.id}>
					<h4>{movie.title}</h4>
				</div>
			))}
		</div>
	);
};
export default SearchResults;
