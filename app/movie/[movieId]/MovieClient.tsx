'use client';

import { BiMoviePlay } from 'react-icons/bi';

import { Badge } from '@/components/ui/badge';
import { Movie } from '@/types/tmdb_types';
interface MovieProps {
	movie: Movie;
}
const MovieClient = ({ movie }: MovieProps) => {
	const thisMovie = movie;
	const trailerVideo = movie.videos.results.find(
		(video) => video.type === 'Trailer'
	);

	return (
		<div className="bg-colors-dark-500 text-colors-light-200">
			<section className="relative">
				<div className="absolute px-2 h-full w-full shadow-[inset_rgba(3,5,5,1)_40px_5px_50px_50px]"></div>
				<img
					src={
						process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH
							? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
							  thisMovie.backdrop_path
							: `/no-image.jpg`
					}
					alt={thisMovie.title}
				/>
				<div className="absolute text-sm md:text-base xl:text-lg bottom-0 ps-8 pe-12 md:pe-44 text-colors-white bg-gradient-to-t from-colors-dark-500 to-colors-dark-500/10 font-semibold">
					<p className="py-6 tracking-tighter">
						{thisMovie.overview}
					</p>
				</div>
				<div className="h-12 w-full -mt-12 bg-gradient-to-t from-colors-dark-500 to-transparent"></div>
			</section>
			<section className="px-4 py-4 md:px-6 lg:px-8">
				<h2 className="font-bold text-2xl md:text-4xl tracking-tight border-b-2 border-colors-primary-300 w-fit px-2">
					{thisMovie.title}
				</h2>
				<h4 className="text-xs mt-3 ms-2">"{thisMovie.tagline}"</h4>
				<div className="flex p-4 justify-around items-center py-4">
					<div className="flex gap-x-2 ">
						{thisMovie.genres.map((genre) => (
							<Badge
								className="bg-colors-primary-300"
								key={genre.id}
							>
								{genre.name}
							</Badge>
						))}
					</div>
					<div className="flex flex-col items-center">
						<p className="tracking-tight text-xs/loose uppercase">
							Watch Trailer
						</p>
						<BiMoviePlay
							onClick={() => showTrailerModal(thisMovie.id)}
							className="cursor-pointer hover:text-colors-primary-100 h-10 w-10 hover:scale-110 transition-all"
						/>
					</div>
					<div className="flex gap-x-2">
						<Badge>{thisMovie.runtime} mins</Badge>
						<Badge>
							Released:
							<span className="ms-1 font-bold">
								{thisMovie.release_date.slice(0, 4)}
							</span>
						</Badge>
					</div>
				</div>
				{/* <iframe
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
					allowFullScreen
					title="Trailer"
				></iframe> */}
			</section>
		</div>
	);
};
export default MovieClient;
