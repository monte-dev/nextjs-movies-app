import { MediaType } from '@/types/media_types';

import { Movies, Series } from '@/types/tmdb_types';

interface TrailerCarouselProps {
	content: Movies | Series;
	contentType: MediaType;
}

const TrailerCarouselCard = ({ content }: TrailerCarouselProps) => {
	return (
		<div>
			<img
				className="h-[280px] w-full m-auto object-cover rounded-md shadow-inner shadow-colors-dark-300"
				src={
					process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH_S
						? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH_S +
						  (content.poster_path || content.backdrop_path)
						: `/no-image.jpg`
				}
				alt={
					'original_title' in content
						? content.original_title
						: 'original_name' in content
						? content.original_name
						: 'Unknown Title'
				}
			/>
			<p className="opacity-0 group-hover:opacity-100 group-hover:bg-black/50 absolute bottom-0 left-1/2 -translate-x-1/2 text-colors-white font-bold text-2xl text-center w-full transition-all duration-500 ease-out">
				{('title' in content ? content.title : content.name) ||
					'Unknown Title'}
			</p>
		</div>
	);
};

export default TrailerCarouselCard;
