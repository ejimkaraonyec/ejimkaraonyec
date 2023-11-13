import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/provider/theme-provider';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'ejimkaraonyec | academics',
};

export default function AcademicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className={cn('min-h-screen grid grid-rows-[auto,1fr,auto] gap-6')}
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
		</section>
	);
}
