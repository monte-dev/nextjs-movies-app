import { Movies, Series } from '@/types/tmdb_types';

interface ResultProps {
	result: Movies | Series;
}
const ResultCard = ({ result }: ResultProps) => {
	return (
		<div className="flex flex-col text-white justify-self-stretch rounded-md ">
			<div className="">
				<img
					className="w-full"
					src={
						process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH
							? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
							  result.poster_path
							: 'no-image.png'
					}
					alt={
						result.hasOwnProperty('original_title')
							? (result as Movies).original_title
							: (result as Series).name
					}
				/>
			</div>
			<h4 className="overflow-hidden">
				{result.hasOwnProperty('original_title')
					? (result as Movies).title
					: (result as Series).name}
			</h4>
			<p>
				{result.hasOwnProperty('release_date')
					? (result as Movies).release_date?.slice(0, 4)
					: (result as Series).first_air_date?.slice(0, 4)}
			</p>
		</div>
	);
};
export default ResultCard;
