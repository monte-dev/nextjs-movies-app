'use client';

import { BiMoviePlay } from 'react-icons/bi';
import { Badge } from '@/components/ui/badge';
import { Serie, SeriesCredit } from '@/types/tmdb_types';
import TrailerModal from '@/components/trailerModal';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface TvClientProps {
	series: Serie;
	credits: SeriesCredit;
}
const TvClient = ({ series, credits }: TvClientProps) => {
	console.log(credits);

	const trailerVideo = series.videos.results.find(
		(video) => video.type === 'Trailer' || video.type
	);

	const [openTrailerModal, setOpenTrailerModal] = useState(false);

	const onTrailerClick = () => {
		if (trailerVideo !== undefined) {
			setOpenTrailerModal(true);
		} else {
			toast.error('No trailer available.');
		}
	};
	return (
		<>
			{trailerVideo !== undefined && (
				<TrailerModal
					isOpen={openTrailerModal}
					onClose={() => setOpenTrailerModal(false)}
					videoKey={trailerVideo!.key}
				/>
			)}
			<div className="bg-colors-dark-500 text-colors-light-200 ">
				<section className="relative h-56 md:h-96">
					<div className="absolute px-2 h-full w-full shadow-[inset_rgba(3,5,5,1)_40px_5px_50px_50px]"></div>
					<img
						className="h-full w-full"
						src={
							process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH &&
							series.backdrop_path
								? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
								  series.backdrop_path
								: `/no-image.jpg`
						}
						alt={series.name}
					/>
					<div className="absolute text-sm md:text-base xl:text-lg bottom-0 ps-8 pe-12 md:pe-44 text-colors-white bg-gradient-to-t from-colors-dark-500 to-colors-dark-500/10 font-semibold">
						<p className="py-6 tracking-tighter">
							{series.overview}
						</p>
					</div>
					<div className="h-12 w-full -mt-12 bg-gradient-to-t from-colors-dark-500 to-transparent"></div>
				</section>
				<section className="px-4 py-4 md:px-6 lg:px-8">
					<h2 className="font-bold text-2xl md:text-4xl tracking-tight border-b-2 border-colors-primary-300 w-fit px-2">
						{series.name}
					</h2>
					<h4 className="text-xs mt-3 ms-2">"{series.tagline}"</h4>
					<div className="flex p-4 justify-around items-center py-4">
						<div className="flex gap-x-2 ">
							{series.genres.map((genre) => (
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
								onClick={() => onTrailerClick()}
								className="cursor-pointer hover:text-colors-primary-100 h-10 w-10 hover:scale-110 transition-all"
							/>
							<Toaster position="top-right" />
						</div>
						<div className="flex gap-x-2">
							<Badge>
								Released:
								<span className="ms-1 font-bold">
									{series.first_air_date.slice(0, 4)}
								</span>
							</Badge>
						</div>
					</div>
				</section>
			</div>
			<div className="w-full h-full"></div>
		</>
	);
};
export default TvClient;
