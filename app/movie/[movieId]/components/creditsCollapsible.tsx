'use client';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
		<div>
			<div>
				<Collapsible
					open={isOpen}
					onOpenChange={handleTriggerClick}
					className="w-[350px] space-y-2"
				>
					<CollapsibleTrigger>
						{isOpen ? 'Hide' : 'Show All'}
					</CollapsibleTrigger>
					<div>
						<div>
							{cast.slice(0, 5).map((member) => (
								<div key={member.id}>
									<p>{member.name}</p>
									<img
										src={
											process.env
												.NEXT_PUBLIC_TMDB_IMAGE_PATH_S! +
											member.profile_path
										}
										alt=""
									/>
								</div>
							))}
						</div>
						<CollapsibleContent>
							{cast.slice(5, 20).map((member) => (
								<div key={member.order}>
									<p>{member.name}</p>
									<img
										src={
											process.env
												.NEXT_PUBLIC_TMDB_IMAGE_PATH_S! +
												member.profile_path ||
											'/no-image.jpg'
										}
										alt=""
									/>
								</div>
							))}
						</CollapsibleContent>
					</div>
				</Collapsible>
			</div>
		</div>
	);
};

export default CreditsCollapsible;
