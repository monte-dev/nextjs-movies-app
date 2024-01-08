import { MediaType } from '@/actions/getMediaImages';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { getContentType } from '@/lib/getContentType';
import { Movies, Series } from '@/types/tmdb_types';
import { useRouter } from 'next/navigation';

interface ResultProps {
	result: Movies | Series;
}
const ResultCard = ({ result }: ResultProps) => {
	const router = useRouter();
	const goToMedia = (id: number, contentType: MediaType) => {
		router.push(
			`/${contentType === MediaType.Movie ? 'movie' : 'tv'}/${id}`
		);
	};
	return (
		<div
			onClick={() => {
				goToMedia(result.id, getContentType(result));
			}}
			className="flex flex-col text-white justify-start group cursor-pointer"
		>
			<img
				className="w-full  rounded-lg group-hover:border-2 group-hover:border-colors-dark-400 h-[160px]"
				src={
					process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH &&
					result.poster_path !== null
						? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
						  result.poster_path
						: `/no-image.jpg`
				}
				alt={
					result.hasOwnProperty('original_title')
						? (result as Movies).original_title
						: (result as Series).name
				}
			/>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<h4 className="overflow-hidden text-sm text-left my-1">
							{result.hasOwnProperty('original_title')
								? (result as Movies).title.slice(0, 22) + '...'
								: (result as Series).name.slice(0, 14) + '...'}
						</h4>
					</TooltipTrigger>
					<TooltipContent>
						{result.hasOwnProperty('original_title')
							? (result as Movies).title
							: (result as Series).name}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<p className="text-xs mt-1">
				{result.hasOwnProperty('release_date')
					? (result as Movies).release_date?.slice(0, 4)
					: (result as Series).first_air_date?.slice(0, 4)}
			</p>
		</div>
	);
};
export default ResultCard;
