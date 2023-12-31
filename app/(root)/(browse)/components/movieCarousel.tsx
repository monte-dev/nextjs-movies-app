'use client';
import React, { useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Movies, Series } from '@/types/tmdb_types';

interface MovieCarouselProps {
	movies: Movies[];
	series: Series[];
}

const MovieCarousel = ({ movies, series }: MovieCarouselProps) => {
	const [loadedContent, setLoadedContent] = useState<Movies[] | Series[]>(
		movies || series
	);

	useEffect(() => {
		setLoadedContent(movies || series);
	}, [movies, series]);

	return (
		<Carousel className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
			<CarouselContent>
				{loadedContent.slice(0, 12).map((content) => (
					<CarouselItem
						key={content.id}
						className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
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
						<p>
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
