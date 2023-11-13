import type { Metadata } from 'next';

import ActiveSectionContextProvider from '@/components/provider/activeSection';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Footer from '@/components/shared/footer';
import Header from '@/components/views/tech/header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'ejimkaraonyec | tech',
};

export default function TechLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className={cn(
				'!scroll-smooth min-h-screen grid grid-rows-[auto,1fr,auto] gap-6'
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
					<main>{children}</main>
					<Footer />
				</ActiveSectionContextProvider>
			</ThemeProvider>
		</section>
	);
}
