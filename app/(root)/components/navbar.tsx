import Link from 'next/link';
import Searchbar from './searchbar';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
	return (
		<nav className="w-full h-[60px] flex justify-between py-2 px-4 sm:px-6 md:px-8 bg-colors-dark-500 text-white items-center shadow-lg border-b-colors-dark-300 border-b-2">
			<div className="">
				<Link href="/" className="h-fit w-full">
					<img className="h-8 w-28 " src="/logo.png" />
				</Link>
			</div>
			<Searchbar />
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</nav>
	);
};
export default Navbar;
