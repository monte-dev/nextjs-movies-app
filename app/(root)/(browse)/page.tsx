import SideMenu from '@/app/(root)/_components/sidebar';
import Sidebar from '@/app/(root)/_components/sidebar';

const HomePage = () => {
	return (
		<div className="w-full flex flex-col sm:flex-row">
			<aside className="bg-colors-dark-300 w-full h-[60px] sm:h-screen sm:w-1/4 shadow-md shadow-colors-dark-400 hover:shadow-lg hover:shadow-colors-dark-400 z-10">
				<SideMenu />
			</aside>
			<section className="bg-colors-dark-200 flex min-h-screen flex-col items-center justify-between p-24 w-full flex-0">
				homepage
			</section>
		</div>
	);
};
export default HomePage;
