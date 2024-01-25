import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-full flex flex-col items-center justify-center space-y-8">
			{children}
		</div>
	);
};
export default AuthLayout;
