import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize); // add event listener
		handleResize(); // update state with initial windows sizes

		return () => window.removeEventListener('resize', handleResize); // cleanup
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
};
