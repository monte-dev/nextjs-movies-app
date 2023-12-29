import { Movie, Movies } from '@/types/tmdb_types';

export const getTopRatedMovies = async (page: number): Promise<Movies[]> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch top-rated movies. Status: ${res.status}`
			);
		}

		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching top-rated movies:', error);
		throw error;
	}
};

export const getMoviesByQuery = async (query: string): Promise<Movies[]> => {
	try {
		const encodedQuery = encodeURIComponent(query);
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch movies with parameters: ${query}. Status: ${res.status}`
			);
		}
		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching movies:', error);
		throw error;
	}
};

export const getMovieDetail = async (id: number): Promise<Movie[]> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos,images&language=en-US`
		);
		if (!res.ok) {
			throw new Error(
				`Failed to fetch movie with id: ${id}. Status: ${res.status}`
			);
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching movie:', error);
		throw error;
	}
};
