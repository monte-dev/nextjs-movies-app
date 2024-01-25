import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex  flex-col items-center justify-center gap-y-5">
			<SignIn />
		</div>
	);
}
