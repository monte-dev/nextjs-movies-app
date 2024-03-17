import { currentUser } from '@clerk/nextjs';
import prismadb from './prismadb';

export const getLoggedInUser = async () => {
	const loggedInUser = await currentUser();

	if (!loggedInUser || !loggedInUser.username) {
		throw new Error('[AUTH_SERVICE] Unauthorized');
	}

	const user = await prismadb.user.findUnique({
		where: {
			externalUserId: loggedInUser.id,
		},
	});

	if (!user) {
		throw new Error('[AUTH_SERVICE] User not found');
	}
	return user;
};
