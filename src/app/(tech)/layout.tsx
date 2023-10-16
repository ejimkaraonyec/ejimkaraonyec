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
					'container min-h-screen grid grid-rows-[auto,1fr,auto] gap-6 font-sans antialiased',
					fontSans.variable,
					headFont.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
					</ActiveSectionContextProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
