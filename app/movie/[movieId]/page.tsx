import { getMovieDetail } from '@/actions/getMovies';
import MovieClient from './MovieClient';
import { getMediaCredits } from '@/actions/getMediaCredits';

interface MoviePageParams {
	params: { movieId: number };
}

const MoviePage = async ({ params }: MoviePageParams) => {
	const movie = await getMovieDetail(params.movieId);
	const credits = await getMediaCredits(params.movieId, true);
	return (
		<div>
			<MovieClient movie={movie} credits={credits} />
		</div>
	);
};
export default MoviePage;
