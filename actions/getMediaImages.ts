interface Image {
	aspect_ratio: number;
	height: number;
	file_path: string;
	vote_count: number;
	width: number;
}

interface ImagesResponse {
	backdrops: Image[];
}

export enum MediaType {
	Movie = 'movie',
	TV = 'tv',
}

const fetchImages = async (
	mediaType: MediaType,
	mediaId: number
): Promise<Image[]> => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&include_image_language=en`
		);
		const data: ImagesResponse = await res.json();

		if (data && data.backdrops) {
			return data.backdrops;
		} else {
			console.log('Wrong media type or mediaId');
		}
	} catch (error) {
		console.error(`Error fetching ${mediaType} images:`, error);
		return [];
	}

	return [];
};

const getHighestVoteImages = (images: Image[]): Image[] => {
	const sortedImages = [...images].sort(
		(a, b) => b.vote_count - a.vote_count
	);

	const topImages = sortedImages.slice(0, 3);

	return topImages;
};

const getCoverImage = (images: Image[]): Image | undefined => {
	return images.reduce(
		(max, image) => (image.aspect_ratio > max.aspect_ratio ? image : max),
		images[0]
	);
};

const getMediaImages = async (mediaType: MediaType, mediaId: number) => {
	const images = await fetchImages(mediaType, mediaId);
	const highestVoteImage = getHighestVoteImages(images);
	const highestAspectRatioImage = getCoverImage(images);

	return {
		highestVoteImage,
		highestAspectRatioImage,
	};
};

export default getMediaImages;
