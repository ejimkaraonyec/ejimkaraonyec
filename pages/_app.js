import { Montserrat } from '@next/font/google';
import Head from 'next/head';
import Layout from '../comps/layout/Layout';
import { StateProvider } from '../context/StateContext';
import '../styles/globals.css';

export const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
	return (
		<StateProvider>
			<Layout>
				<Head>
					<title>ejimkaraonyec</title>
					<meta
						name="description"
						content="Ejimkaraonye, Chukwuemeka is an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions."
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link rel="icon" type="image/png" href="/favicon.png" />
				</Head>
				<main className={`centered ${montserrat.className}`}>
					<Component {...pageProps} />
				</main>
			</Layout>
		</StateProvider>
	);
}

export default MyApp;
