import Head from 'next/head';
import { ThoughtCard } from '../../comps/thoughts/thoughts';
import { getFeaturedThoughts } from '../../lib/fetchUtil';
import styles from '../../styles/Thoughts.module.css';

export const getStaticProps = async () => {
	const featured = getFeaturedThoughts();
	return {
		props: { thoughts: featured },
		// revalidate: 1800,
	};
};

export default function Thoughts({ thoughts }) {
	return (
		<>
			<Head>
				<title>ejimkaraonyec | thoughts</title>
				<meta
					name="description"
					content="Shared thoughts: ...ejimkaraonyec, anonymous, friends, frenemies ..."
				/>
			</Head>
			<main className="centered">
				<section className={`content ${styles.featured}`}>
					<h2 className="ht3 brand title">Featured</h2>
					<section className={styles.thoughtCards}>
						{thoughts.map((thought) => (
							<ThoughtCard thought={thought} key={thought.slug} />
						))}
					</section>
				</section>
			</main>
		</>
	);
}
