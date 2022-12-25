import { useEffect, useState } from 'react';
export const useMobile = () => {
	const [mounted, setMounted] = useState(false);
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (mounted) {
			console.log(window.innerWidth < 450, window.innerWidth);
			setMobile(window.innerWidth < 450);
		}
		return () => setMobile(window.innerWidth < 450);
	}, [mounted]);

	return { mobile, mounted };
};
