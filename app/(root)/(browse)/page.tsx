import { getTopRatedMovies } from '@/actions/getMovies';
import MovieCarousel from './components/movieCarousel';
import { getTopRatedSeries } from '@/actions/getSeries';

const HomePage = async () => {
	const topRatedMovies = await getTopRatedMovies(1);
	const topRatedSeries = await getTopRatedSeries(1);

	return (
		<section>
			<MovieCarousel movies={topRatedMovies} />
			<MovieCarousel series={topRatedSeries} />
		</section>
	);
};
export default HomePage;
