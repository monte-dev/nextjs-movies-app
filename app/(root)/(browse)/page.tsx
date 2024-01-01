import { getTopRatedMovies } from '@/actions/getMovies';
import { getTopRatedSeries } from '@/actions/getSeries';
import MediaTrailerCarousel from './components/mediaTrailerCarousel';

const HomePage = async () => {
	const topRatedMovies = await getTopRatedMovies(1);
	const topRatedSeries = await getTopRatedSeries(1);

	return (
		<section>
			<MediaTrailerCarousel movies={topRatedMovies} />
			<MediaTrailerCarousel series={topRatedSeries} />
		</section>
	);
};
export default HomePage;
