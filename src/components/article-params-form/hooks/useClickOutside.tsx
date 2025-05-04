import { useCallback, useEffect } from 'react';

export const useClickOutside = (
	asideRef: { current: HTMLElement | null },
	toggleAside: () => void,
	isOpen: boolean
) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				event.target instanceof Node &&
				!asideRef.current?.contains(event.target)
			) {
				toggleAside();
			}
		},
		[toggleAside, asideRef]
	);

	useEffect(() => {
		if (!isOpen) return;

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);
};
