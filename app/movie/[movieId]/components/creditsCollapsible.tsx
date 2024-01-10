'use client';
import { Button } from '@/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { MovieCredit } from '@/types/tmdb_types';
import { useState } from 'react';

interface CreditsProps {
	credits: MovieCredit;
}

const CreditsCollapsible = ({ credits }: CreditsProps) => {
	const cast = credits.cast;
	const crew = credits.crew.slice(0, 20);

	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="px-4 py-2">
			<h2 className="text-3xl ms-8 text-colors-light-100 my-4">
				Top cast
			</h2>
			<div>
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
									<p className="text-sm overflow-hidden pt-2 text-center">
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
						<CollapsibleContent className="grid grid-cols-5 gap-x-2  ">
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
