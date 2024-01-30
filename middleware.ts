import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: ['/api/webhooks(.*)', '/', /^\/tv\/.+/, /^\/movie\/.+/],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
