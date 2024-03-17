export const getContentDetails = async (id: number) => {
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
