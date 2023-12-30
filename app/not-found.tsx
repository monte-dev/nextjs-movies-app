import Link from 'next/link';
import Navbar from './components/navbar';

export default function NotFound() {
	return (
		<div className="w-full">
			<Navbar />
			<div className="bg-colors-dark-100 w-full h-screen flex flex-col items-center gap-y-4 justify-center text-white">
				<h2 className="text-4xl font-bold pb-12">Not Found</h2>
				<p className="pb-12">This page does not exist.</p>
				<Link
					href="/"
					className="bg-colors-primary-400 border-colors-primary-200 border-2 rounded-md px-4 py-2 hover:bg-colors-primary-200 transition-all duration-150 ease-in"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
