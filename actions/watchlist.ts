import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
export interface watchlistTypes {
	id: string;
}

export const addToWatchlist = async (id: string) => {
	const currentUser = auth();
	console.log(id);
	// const mediaType =

	// await prismadb.watchlist.create({
	// 	data: {
	// 	},
	// });
};
