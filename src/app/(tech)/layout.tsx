import '@/styles/globals.css';
import type { Metadata } from 'next';

import ActiveSectionContextProvider from '@/components/provider/activeSection';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Footer from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/views/tech/header';
import { fontSans, headFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'ejimkaraonyec | tech',
	description:
		'Ejimkaraonye, Chukwuemeka is an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions.',
	creator: 'Ejimkaraonye, Chukwuemeka',
	icons: [
		{ rel: 'icon', url: '/favicon.svg' },
		{ rel: 'icon', url: '/favicon.png' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen grid grid-rows-[auto,1fr,auto] gap-6 font-sans antialiased',
					fontSans.variable,
					headFont.variable
				)}
			>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
				</div>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]" />
				</div>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ActiveSectionContextProvider>
						<Header />
						<main className="container">{children}</main>
						<Footer />
					</ActiveSectionContextProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
