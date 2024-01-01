'use client';
import { Movie } from '@/types/tmdb_types';
interface MovieProps {
	movie: Movie;
}
const MovieClient = ({ movie }: MovieProps) => {
	const thisMovie = movie;
	// console.log(movie);
	return <div>{thisMovie.title}</div>;
};
export default MovieClient;
