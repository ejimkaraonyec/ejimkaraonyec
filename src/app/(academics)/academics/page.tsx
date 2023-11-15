import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section className="space-y-3 text-center">
				<h1 className="font-heading">Academics & Research</h1>
				<p className="text-muted-foreground">
					Page reconstruction in progress; please check back later. Thank you.
				</p>
				<Link href="/" className={buttonVariants()}>
					Go to home
				</Link>
			</section>
		</>
	);
}
