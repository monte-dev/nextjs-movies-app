import {
	MdLocalMovies,
	MdOutlineScreenshotMonitor,
	MdOutlineStar,
} from 'react-icons/md';

const SideMenu = () => {
	return (
		<div className="text-colors-light-100">
			<nav>
				<ul className="w-full flex sm:flex sm:flex-col justify-center gap-x-8 sm:gap-x-0 px-4  sm:py-8 md:px-4 md:py-8  ">
					<div className="group">
						<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400  md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
							<MdLocalMovies className="group-hover:text-colors-primary-100 me-2" />
							Movies
						</li>
						<div className="w-0 h-1 group-hover:w-full group-hover:h-1 group-hover:bg-colors-dark-100 transition-all duration-700"></div>
					</div>
					<div className="group">
						<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400 md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
							<MdOutlineScreenshotMonitor className="group-hover:text-colors-primary-100 me-2" />
							Series
						</li>
						<div className="w-0  h-1 group-hover:w-full group-hover:h-1 group-hover:bg-colors-dark-100 transition-all duration-700"></div>
					</div>
					<div className="group">
						<li className="group flex items-center text-md py-3 my-1 px-2 hover:bg-colors-dark-400 md:hover:my-2 hover:rounded-md hover:text-white transition-all duration-400 ease-out cursor-pointer">
							<MdOutlineStar className="group-hover:text-colors-primary-100 me-2" />
							Watchlist
						</li>
						<div className="w-0  h-1 group-hover:w-full group-hover:h-1 group-hover:bg-colors-dark-100 transition-all duration-700"></div>
					</div>
				</ul>
			</nav>
		</div>
	);
};
export default SideMenu;
