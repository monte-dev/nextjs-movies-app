import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const WatchlistPage = async () => {
	// const { userId } = auth();

	// if (!userId) {
	// 	redirect('/sign-in');
	// }
	return (
		<div className="flex flex-col justify-center items-center h-full"></div>
	);
};
export default WatchlistPage;
