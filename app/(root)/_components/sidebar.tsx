import {
	MdLocalMovies,
	MdOutlineScreenshotMonitor,
	MdOutlineStar,
} from 'react-icons/md';

const SideMenu = () => {
	return (
		<div className="text-colors-light-100">
			<nav>
				<ul className="w-full flex sm:flex sm:flex-col justify-center gap-x-8 sm:gap-x-0 px-4 py-0.5 sm:py-8 md:px-4 md:py-8  ">
					<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400  md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
						<MdLocalMovies className="group-hover:text-colors-primary-100 me-2" />
						Movies
					</li>
					<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400 md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
						<MdOutlineScreenshotMonitor className="group-hover:text-colors-primary-100 me-2" />
						Series
					</li>
					<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400 md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
						<MdOutlineStar className="group-hover:text-colors-primary-100 me-2" />
						Watchlist
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default SideMenu;
