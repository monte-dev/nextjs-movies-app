import Link from 'next/link';
import Searchbar from './searchbar';

const Navbar = () => {
	return (
		<nav className="w-full h-[60px] flex justify-between py-2 px-4 sm:px-6 md:px-8 bg-colors-dark-300 text-white items-center shadow-lg border-b-colors-light-500 border-b-2">
			<div>
				<Link href="/">LOGO</Link>
			</div>
			<Searchbar />
			<div>user</div>
		</nav>
	);
};
export default Navbar;
