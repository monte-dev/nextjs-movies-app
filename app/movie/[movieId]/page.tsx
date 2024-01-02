import { getMovieDetail } from '@/actions/getMovies';
import MovieClient from './MovieClient';

interface MoviePageParams {
	params: { movieId: number };
}

const MoviePage = async ({ params }: MoviePageParams) => {
	const movie = await getMovieDetail(params.movieId);
	return (
		<div>
			<MovieClient movie={movie} />
		</div>
	);
};
export default MoviePage;
