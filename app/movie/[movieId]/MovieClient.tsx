'use client';
import { Movie } from '@/types/tmdb_types';
interface MovieProps {
	movie: Movie;
}
const MovieClient = ({ movie }: MovieProps) => {
	const thisMovie = movie;
	const trailerVideo = movie.videos.results.find(
		(video) => video.type === 'Trailer'
	);
	console.log(thisMovie);
	return (
		<div className="bg-colors-dark-600 ">
			<div className="relative">
				<div className="absolute h-full w-full  shadow-[inset_rgba(3,5,5,1)_40px_5px_50px_50px]"></div>
				<img
					src={
						process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH
							? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
							  thisMovie.backdrop_path
							: `/no-image.jpg`
					}
					alt={thisMovie.title}
				/>
			</div>
			<div>
				<h2>{thisMovie.title}</h2>

				<iframe
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
					allowFullScreen
					title="Trailer"
				></iframe>
			</div>
		</div>
	);
};
export default MovieClient;
