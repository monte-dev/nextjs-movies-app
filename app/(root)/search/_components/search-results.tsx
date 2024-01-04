import { getMoviesByQuery } from '@/actions/getMovies';
import ResultCard from './resultCard';
import { getSeriesByQuery } from '@/actions/getSeries';

interface SearchResultsProps {
	query: string | null;
}
const SearchResults = async ({ query }: SearchResultsProps) => {
	const movieResults = await getMoviesByQuery(query!);
	const seriesResults = await getSeriesByQuery(query!);
	return (
		<div>
			<div className="   py-8 pt-6 mx-12 grid grid-cols-6 items-start gap-2">
				{movieResults.map((movie) => (
					<ResultCard result={movie} key={movie.id} />
				))}
			</div>
			<div className=" items-center justify-between py-8 pt-6 pb-20 grid grid-cols-6">
				{seriesResults.map((series) => (
					<ResultCard result={series} key={series.id} />
				))}
			</div>
		</div>
	);
};
export default SearchResults;
