import Head from 'next/head';
import { NotFeatured, ThoughtCard } from '../../comps/thoughts/thoughts';
import {
	getFeaturedNullThoughts,
	getFeaturedThoughts,
} from '../../lib/fetchUtil';
import styles from '../../styles/Thoughts.module.css';

export const getStaticProps = async () => {
	const featured = getFeaturedThoughts();
	const nullFeatured = getFeaturedNullThoughts();
	return {
		props: { featured, nullFeatured },
		// revalidate: 1800,
	};
};

export default function Thoughts({ featured, nullFeatured }) {
	return (
		<>
			<Head>
				<title>ejimkaraonyec | thoughts</title>
				<meta
					name="description"
					content="Shared thoughts: ...ejimkaraonyec, anonymous, friends, frenemies ..."
				/>
			</Head>
			<section className={`content ${styles.featured}`}>
				{/* <h2 className="ht2 brand title">Featured</h2> */}
				<section className={styles.thoughtCards}>
					{featured.map((thought) => (
						<ThoughtCard thought={thought} key={thought.slug} />
					))}
				</section>
			</section>
			<NotFeatured thoughts={nullFeatured} />
		</>
	);
}
