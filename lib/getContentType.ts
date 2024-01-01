import { MediaType } from '@/actions/getMediaImages';
import { Movies, Series } from '@/types/tmdb_types';

export const getContentType = (content: Movies | Series): MediaType => {
	if ('original_title' in content) {
		return MediaType.Movie;
	} else {
		return MediaType.TV;
	}
};
