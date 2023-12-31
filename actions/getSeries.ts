import { Series } from '@/types/tmdb_types';

export const getTopRatedSeries = async (page: number): Promise<Series[]> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch top-rated TV series. Status: ${res.status}`
			);
		}

		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching top-rated TV series:', error);
		throw error;
	}
};
