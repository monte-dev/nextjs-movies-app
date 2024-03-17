import { getContentType } from '@/actions/getContentType';
import { getLoggedInUser } from './auth-service';
import prismadb from './prismadb';

export const addToWatchlist = async (id: string) => {
	const user = await getLoggedInUser();

	const existsOnWatchlist = await prismadb.watchlist.findFirst({
		where: {
			userId: user.id,
			OR: [
				{ movieId: id, seriesId: null },
				{ seriesId: id, movieId: null },
			],
		},
	});

	const contentType = getContentType(id);

	if (existsOnWatchlist) {
		throw new Error('Already on watchlist');
	}

	const add = await prismadb.watchlist.create({
		data: {
			userId: user.id,
		},
	});
	return add;
};
