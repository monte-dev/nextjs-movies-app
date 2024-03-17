import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { getContentType } from '@/actions/getContentType';
import { Movies, Series } from '@/types/tmdb_types';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MediaType } from '@/types/media_types';

interface ResultProps {
	result: Movies | Series;
}

const shortenTitle = (title: string, maxLength: number): string => {
	return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
};

const ResultCard = ({ result }: ResultProps) => {
	const router = useRouter();
	const goToMedia = (id: number, contentType: MediaType) => {
		router.push(
			`/${contentType === MediaType.Movie ? 'movie' : 'tv'}/${id}`
		);
	};

	const getTitle = () => {
		if (result.hasOwnProperty('original_title')) {
			return shortenTitle((result as Movies).title, 35);
		} else {
			return shortenTitle((result as Series).name, 35);
		}
	};

	const imageSource =
		process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH && result.poster_path !== null
			? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH + result.poster_path
			: '/no-image.jpg';

	return (
		<div
			onClick={() => {
				goToMedia(result.id, getContentType(result));
			}}
			className="flex flex-col text-white justify-start group cursor-pointer"
		>
			<img
				className="w-full rounded-lg group-hover:border-2 group-hover:border-colors-dark-400 h-[160px]"
				src={imageSource}
				alt={
					result.hasOwnProperty('original_title')
						? (result as Movies).original_title
						: (result as Series).name
				}
			/>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<h4 className="overflow-hidden h-10 text-sm text-left my-1">
							{getTitle()}
						</h4>
					</TooltipTrigger>
					<TooltipContent>
						{result.hasOwnProperty('original_title')
							? (result as Movies).title
							: (result as Series).name}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<div className="flex justify-between items-center">
				<p className="text-xs mt-1">
					{result.hasOwnProperty('release_date')
						? (result as Movies).release_date?.slice(0, 4)
						: (result as Series).first_air_date?.slice(0, 4)}
				</p>
				<span className="text-xs md:text-sm flex gap-x-1">
					<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
					{result.vote_average.toFixed(1)}
				</span>
			</div>
		</div>
	);
};

export default ResultCard;
