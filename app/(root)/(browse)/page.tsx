import { getTopRatedMovies } from '@/actions/getMovies';
import SideMenu from '@/app/(root)/components/sidemenu';
import MovieCarousel from './components/movieCarousel';
import { getTopRatedSeries } from '@/actions/getSeries';

const HomePage = async () => {
	const topRatedMovies = await getTopRatedMovies(1);
	const topRatedSeries = await getTopRatedSeries(1);
	return (
		<div className="w-full flex flex-col sm:flex-row bg-colors-dark-300 relative ">
			<aside className=" bg-colors-dark-300 w-full h-[60px] text-xs sm:text-base overflow-hidden sm:h-screen sm:w-1/4 md:max-w-[200px] shadow-md shadow-colors-dark-400 hover:shadow-lg hover:shadow-colors-dark-400">
				<SideMenu />
			</aside>
			<main className="bg-colors-dark-200 flex min-h-screen flex-col md:m-auto py-4 sm:py-6 md:py-8 px-2">
				<section>
					<MovieCarousel movies={topRatedMovies} />
				</section>
				<section>
					<MovieCarousel series={topRatedSeries} />
				</section>
			</main>
		</div>
	);
};
export default HomePage;
