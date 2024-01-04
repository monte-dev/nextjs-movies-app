import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Movies, Series } from '@/types/tmdb_types';

interface ResultProps {
	result: Movies | Series;
}
const ResultCard = ({ result }: ResultProps) => {
	return (
		<div className="flex flex-col text-white justify-self-stretch group">
			<div className="">
				<img
					className="w-full  rounded-lg group-hover:border-[1px] group-hover:border-colors-light300"
					src={
						process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH
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
			</div>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<h4 className="overflow-hidden text-sm text-left my-1">
							{result.hasOwnProperty('original_title')
								? (result as Movies).title.slice(0, 28) + '...'
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
