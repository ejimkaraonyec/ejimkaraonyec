import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,800;0,900;1,600&display=optional"
					rel="stylesheet"
				/>
			</Head>
			{/* <Head /> */}
			<body>
				<Main />
				<NextScript />
				<section id="portal"></section>
			</body>
		</Html>
	);
}
