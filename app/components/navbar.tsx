import Link from 'next/link';
import Searchbar from './searchbar';

const Navbar = () => {
	return (
		<nav className="w-full flex justify-between py-2 px-4 sm:px-6 md:px-8 bg-colors-dark-200 text-white items-center shadow-lg border-b-colors-light-400 border-b-2">
			<div>
				<Link href="/">LOGO</Link>
			</div>
			<Searchbar />
			<div>user</div>
		</nav>
	);
};
export default Navbar;
