'use client';
import { useSearchParams } from 'next/navigation';
import SearchResults from './_components/search-results';

const SearchPage = () => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get('q');
	return (
		<div>
			<SearchResults query={searchQuery} />
		</div>
	);
};
export default SearchPage;
