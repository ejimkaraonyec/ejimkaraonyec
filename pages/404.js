import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 4000000);
	}, [router]);
	return (
		<>
			<Head>
				<title>ejimkaraonyec | 404</title>
			</Head>
			<div className="oops">
				<span className="ht4">Oooops...</span>
				<span className="ht6">
					The page you entered does not exist or might be in development.
				</span>
				<span>
					Please go back to the{' '}
					<Link href="/" className="oops-link">
						homepage
					</Link>{' '}
					Or{' '}
					<a href="#social" className="oops-link">
						contact me
					</a>{' '}
					if the page should exist.
				</span>
			</div>
		</>
	);
};
export default NotFound;
