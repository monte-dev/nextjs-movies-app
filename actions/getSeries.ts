import { Series, Serie } from '@/types/tmdb_types';

export const getTopRatedSeries = async (page: number): Promise<Series[]> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
		);

		if (!res.ok) {
			throw new Error(
				`[SERIES_TOP_RATED] Failed to fetch top-rated TV series. Status: ${res.status}`
			);
		}

		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error(
			'[SERIES_TOP_RATED] Error fetching top-rated TV series:',
			error
		);
		throw error;
	}
};

export const getSeriesDetail = async (id: number): Promise<Serie> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos,images&language=en-US`
		);
		if (!res.ok) {
			throw new Error(
				`[SERIES_DETAIL] Failed to fetch series with id: ${id}. Status: ${res.status}`
			);
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('[SERIES_DETAIL] Error fetching series:', error);
		throw error;
	}
};

export const getSeriesByQuery = async (query: string): Promise<Series[]> => {
	try {
		const encodedQuery = encodeURIComponent(query);
		const res = await fetch(
			`https://api.themoviedb.org/3/search/tv?query=${encodedQuery}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);

		if (!res.ok) {
			throw new Error(
				`[SERIES_QUERY]Failed to fetch series with parameters: ${query}. Status: ${res.status}`
			);
		}
		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('[SERIES_QUERY] Error fetching series:', error);
		throw error;
	}
};
