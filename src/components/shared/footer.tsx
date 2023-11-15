import Link from 'next/link';

import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Footer() {
	return (
		<footer className="container flex gap-4 justify-center items-center pb-5">
			<p className="text-center text-sm text-muted-foreground text-bold">
				&copy;{' '}
				<Link href={'/'} className="text-ring">
					ejimkaraonyec
				</Link>
				. All rights reserved.
			</p>
			<ThemeToggle />
		</footer>
	);
}
