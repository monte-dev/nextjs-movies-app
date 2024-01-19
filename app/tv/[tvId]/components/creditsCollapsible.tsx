'use client';
import { Button } from '@/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { SeriesCredit } from '@/types/tmdb_types';
import { useState } from 'react';

interface CreditsProps {
	credits: SeriesCredit;
}

const CreditsCollapsible = ({ credits }: CreditsProps) => {
	const cast = credits.cast;

	const directorsSet = new Set<string>();
	const directors = credits.crew.filter(
		(crewMember) =>
			crewMember.job === 'Director' ||
			crewMember.known_for_department === 'Directing'
	);
	directors.forEach((director) => {
		directorsSet.add(director.name);
	});
	const uniqueDirectors = Array.from(directorsSet);

	const writersSet = new Set<string>();
	const writers = credits.crew.filter(
		(crewMember) =>
			crewMember.job === 'Writer' ||
			crewMember.known_for_department === 'Writing'
	);
	writers.forEach((writer) => {
		writersSet.add(writer.name);
	});
	const uniqueWriters = Array.from(writersSet);

	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="px-4 py-2 text-colors-light-100">
			<div className="flex justify-between items-center">
				<h2 className="w-fit px-8 text-3xl mx-2 text-colors-light-100 my-4 bg-colors-dark-200 p-3">
					Top cast
				</h2>
				<div className="flex flex-col items-end py-3">
					<div className="flex">
						<h4 className="text-white me-2  font-semibold ">
							Directors:
						</h4>
						{uniqueDirectors.slice(0, 3).map((director, index) => (
							<p
								className="text-white text-md me-2 italic text-colors-light-300"
								key={index}
							>
								{director} |
							</p>
						))}
					</div>
					<div className="flex">
						<h4 className="text-white me-2 font-semibold ">
							Writers:
						</h4>
						{uniqueWriters
							.reverse()
							.slice(0, 3)
							.map((writer, index) => (
								<p
									className="text-white italic text-md  me-2 text-colors-light-300"
									key={index}
								>
									{writer} |
								</p>
							))}
					</div>
				</div>
			</div>
			<div className="border border-colors-light-500">
				<Collapsible
					open={isOpen}
					onOpenChange={handleTriggerClick}
					className="w-5/6 m-auto text-center"
				>
					<div className="w-full my-4">
						<div className="grid grid-cols-5 gap-x-2  ">
							{cast.slice(0, 5).map((member) => (
								<div key={member.id} className="my-6 ">
									<div>
										<img
											className="h-32 w-32 object-contain rounded-[100%] "
											src={
												member.profile_path !== null
													? process.env
															.NEXT_PUBLIC_TMDB_IMAGE_PATH_S! +
													  member.profile_path
													: '/no-image.jpg'
											}
											alt={member.name}
										/>
									</div>
									<p className="text-sm overflow-hidden pt-2 h-8 text-center over">
										{member.name}
									</p>
									<Separator className="bg-colors-primary-400 mt-3" />
									<p className="text-xs pt-2 text-center italic">
										{member.character}
									</p>
								</div>
							))}
						</div>
						{!isOpen && (
							<CollapsibleTrigger>
								<Button variant={'outline'}>Show more</Button>
							</CollapsibleTrigger>
						)}
						<CollapsibleContent className="grid grid-cols-5 gap-x-2 ">
							{cast.slice(5, 15).map((member) => (
								<div
									key={member.order}
									className="my-6 rounded-full"
								>
									<div>
										<img
											className="h-32 w-32 object-contain rounded-[100%] "
											src={
												member.profile_path !== null
													? process.env
															.NEXT_PUBLIC_TMDB_IMAGE_PATH_S! +
													  member.profile_path
													: '/no-image.jpg'
											}
											alt={member.name}
										/>
									</div>
									<p className="text-sm overflow-hidden pt-2 text-center">
										{member.name}
									</p>
									<Separator className="bg-colors-primary-400 mt-3" />
									<p className="text-xs pt-2 text-center italic">
										{member.character}
									</p>
								</div>
							))}
						</CollapsibleContent>
						{isOpen && (
							<CollapsibleTrigger>
								<Button variant={'outline'}>Hide</Button>
							</CollapsibleTrigger>
						)}
					</div>
				</Collapsible>
			</div>
		</div>
	);
};

export default CreditsCollapsible;
