'use client';
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const Searchbar = () => {
	const router = useRouter();
	const [query, setQuery] = useState('');

	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!query) return;

		router.push('/search' + query);
	};

	return (
		<form
			onSubmit={onSearch}
			className="relative w-full md:w-72 lg:w-96 flex items-center"
		>
			<Input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-60 md:w-96 border-rose-200 border-e-0 bg-gray-100 rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:ring-transparent"
			/>
			<Button
				type="submit"
				title="search"
				variant="secondary"
				className="border-[1px] border-l-0
				border-rose-200
				rounded-l-none "
			>
				<HiSearch />
			</Button>
		</form>
	);
};
export default Searchbar;
