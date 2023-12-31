'use client';
import React, { useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Movies } from '@/types/tmdb_types';

interface MovieCarouselProps {
	movies: Movies[];
}

const MovieCarousel = ({ movies }: MovieCarouselProps) => {
	const [loadedMovies, setLoadedMovies] = useState(movies);
	useEffect(() => {
		setLoadedMovies(movies);
	}, [movies]);

	return (
		<Carousel className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
			<CarouselContent>
				{loadedMovies.slice(0, 12).map((movie) => (
					<CarouselItem
						key={movie.id}
						className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					>
						<img
							className="h-[200px] m-auto"
							src={
								process.env.NEXT_PUBLIC_TMDB_IMAGE_PATH +
								movie.backdrop_path
							}
							alt={movie.original_title}
						/>
						<p>{movie.title}</p>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
export default MovieCarousel;
