import { MovieCredit, SeriesCredit } from '@/types/tmdb_types';

export const getMediaCredits = async (
	id: number,
	isMovie: boolean
): Promise<MovieCredit | SeriesCredit> => {
	const mediaType = isMovie ? 'movie' : 'tv';
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
		);

		const credits = await res.json();

		if (isMovie) {
			return credits as MovieCredit;
		} else {
			return credits as SeriesCredit;
		}
	} catch (error) {
		console.error('Error fetching credits:', error);
		throw error;
	}
};
