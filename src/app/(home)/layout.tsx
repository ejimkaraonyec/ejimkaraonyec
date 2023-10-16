import '@/styles/globals.css';
import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import { fontSans, headFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'ejimkaraonyec',
	description:
		'Ejimkaraonye, Chukwuemeka is an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions.',
	creator: 'Ejimkaraonye, Chukwuemeka',
	icons: [
		{ rel: 'icon', url: '/favicon.svg' },
		{ rel: 'icon', url: '/favicon.png' },
	],
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					'container min-h-screen font-sans antialiased grainy',
					fontSans.variable,
					headFont.variable
				)}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
