'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Movies, Series } from '@/types/tmdb_types';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

import TrailerCarouselCard from './trailerCarouselCard';
import { getContentType } from '@/actions/getContentType';
import { MediaType } from '@/types/media_types';

interface MediaCarouselProps {
	movies?: Movies[];
	series?: Series[];
}

const MediaTrailerCarousel = ({ movies, series }: MediaCarouselProps) => {
	const router = useRouter();
	const [loadedContent, setLoadedContent] = useState<(Movies | Series)[]>(
		movies || series!
	);

	useEffect(() => {
		setLoadedContent(movies || series!);
	}, [movies, series]);

	const goToMedia = (id: number, contentType: MediaType) => {
		router.push(
			`/${contentType === MediaType.Movie ? 'movie' : 'tv'}/${id}`
		);
	};

	return (
		<Carousel
			opts={{ loop: true, align: 'center' }}
			className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl my-2  group/container"
		>
			<CarouselContent>
				{loadedContent.slice(0, 12).map((content) => (
					<CarouselItem
						key={content.id}
						className="group pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 relative cursor-pointer mx-1 rounded-md shadow-md shadow-colors-dark-300"
						onClick={() => {
							goToMedia(content.id, getContentType(content));
						}}
					>
						<TrailerCarouselCard
							content={content}
							contentType={
								'original_title' in content
									? MediaType.Movie
									: MediaType.TV
							}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="opacity-0 text-white group-hover/container:opacity-75 ms-14" />
			<CarouselNext className="opacity-0 text-white group-hover/container:opacity-75 me-14" />
		</Carousel>
	);
};

export default MediaTrailerCarousel;
