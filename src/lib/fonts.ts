import { Montserrat, Montserrat_Alternates } from 'next/font/google';

export const fontSans = Montserrat({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const headFont = Montserrat_Alternates({
	subsets: ['latin'],
	weight: ['500', '600', '700', '800', '900'],
	variable: '--font-heading',
});
