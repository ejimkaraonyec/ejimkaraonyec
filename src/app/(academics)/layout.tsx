import '@/styles/globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/provider/theme-provider';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { Toaster } from '@/components/ui/toaster';
import { fontSans, headFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'ejimkaraonyec | academics',
	description:
		'Ejimkaraonye, Chukwuemeka is an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions.',
	creator: 'Ejimkaraonye, Chukwuemeka',
	icons: [
		{ rel: 'icon', url: '/favicon.svg' },
		{ rel: 'icon', url: '/favicon.png' },
	],
};

export default function AcademicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'container min-h-screen grid grid-rows-[auto,1fr,auto] gap-6 antialiased font-sans grainy',
					fontSans.variable,
					headFont.variable
				)}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
