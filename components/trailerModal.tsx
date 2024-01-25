'use client';

import { useEffect, useState } from 'react';

import { Modal } from '@/components/ui/modal';

interface TrailerModalProps {
	isOpen: boolean;
	onClose: () => void;
	videoKey: string;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({
	isOpen,
	onClose,
	videoKey,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<iframe
				className="h-full w-full rounded-md "
				src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
				allowFullScreen
				title="Trailer"
			></iframe>
		</Modal>
	);
};

export default TrailerModal;
