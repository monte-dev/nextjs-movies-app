'use client';
import React, { useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Movies, Series } from '@/types/tmdb_types';
import { useRouter } from 'next/navigation';

interface MovieCarouselProps {
	movies?: Movies[];
	series?: Series[];
}

const MovieCarousel = ({ movies, series }: MovieCarouselProps) => {
	const router = useRouter();
	const [loadedContent, setLoadedContent] = useState<Movies[] | Series[]>(
		movies || series!
	);

	useEffect(() => {
		setLoadedContent(movies || series!);
	}, [movies, series]);
	const goToMovie = (id: number) => {
		router.push(`/movie/${id}`);
	};
	return (
		<Carousel className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl border-y-[1px] border-colors-dark-300 my-2 shadow-md shadow-colors-dark-300">
			<CarouselContent>
				{loadedContent.slice(0, 12).map((content) => (
					<CarouselItem
						key={content.id}
						className="group pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 relative cursor-pointer"
						onClick={() => goToMovie(content.id)}
					>
						<img
							className="h-[200px] m-auto object-cover"
							src={
								process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH
									? process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
									  (content.backdrop_path ||
											content.poster_path)
									: `/no-image.jpg`
							}
							alt={
								'original_title' in content
									? content.original_title
									: 'original_name' in content
									? content.original_name
									: 'Unknown Title'
							}
						/>
						<p className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-colors-white font-bold text-2xl text-center w-full transition-all duration-500 ease-out">
							{('title' in content
								? content.title
								: content.name) || 'Unknown Title'}
						</p>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default MovieCarousel;
