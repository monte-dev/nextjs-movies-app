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

		router.push('/search/?q=' + query);
	};

	return (
		<form
			onSubmit={onSearch}
			className="relative w-full md:w-72 lg:w-96 flex items-center justify-center"
		>
			<Input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-32 sm:w-48 md:w-64 border-colors-light-400 border-e-0 bg-colors-light-500 rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:ring-transparent active:border-colors-primary-100 active:border-e-[1px]"
			/>
			<Button
				type="submit"
				title="search"
				variant="secondary"
				className="border-[1px] border-l-0
				border-colors-light-400 text-white
				rounded-l-none bg-colors-light-500 hover:bg-colors-primary-400"
			>
				<HiSearch />
			</Button>
		</form>
	);
};
export default Searchbar;
