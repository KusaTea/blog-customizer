import { useCallback, useEffect } from 'react';

export const useClickOutside = (
	asideRef: { current: HTMLElement | null },
	toggleAside: () => void,
	isOpen: boolean
) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (!asideRef.current?.contains(event.target as Node | null)) {
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
