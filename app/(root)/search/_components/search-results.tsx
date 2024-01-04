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
		<div className="py-8 pt-6 mx-12 text-white">
			<section className="py-4">
				<h3 className="my-2 w-1/4 mb-4 border-b-2 border-colors-primary-200 py-1">
					Movies found:
				</h3>
				<div className=" grid grid-cols-6 items-start gap-x-3 gap-y-4">
					{movieResults.map((movie) => (
						<ResultCard result={movie} key={movie.id} />
					))}
				</div>
			</section>
			<section className="py-4">
				<h3 className="my-2 w-1/4 mb-4 border-b-2 border-colors-primary-200 py-1">
					Series found:
				</h3>
				<div className="grid grid-cols-6 items-start gap-x-3 gap-y-4">
					{seriesResults.map((series) => (
						<ResultCard result={series} key={series.id} />
					))}
				</div>
			</section>
		</div>
	);
};
export default SearchResults;
