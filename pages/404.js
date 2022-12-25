import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 4000);
	}, [router]);
	return (
		<>
			<Head>
				<title>ejimkaraonyec | 404</title>
				<meta name="keywords" content="nakama" />
				<meta name="description" content="ejimkaraonyec 404 page" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<main className="not-found">
				<div className="centered">
					<div className="oops">
						<span className="ht4">Oooops...</span>
						<span className="ht6">
							The page you entered does not exist or in development.
						</span>
						<span>
							Please go back to the{' '}
							<Link href="/" className="oops-link">
								Homepage
							</Link>
						</span>
					</div>
				</div>
			</main>
		</>
	);
};
export default NotFound;
