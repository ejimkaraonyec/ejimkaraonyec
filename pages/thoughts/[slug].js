import Head from 'next/head';
import { ThoughtDetail } from '../../comps/thoughts/thoughts';
import { getThought, thoughtPaths } from '../../lib/fetchUtil';
// import styles from '../../styles/Thoughts.module.css';

export const getStaticProps = async (context) => {
	const { slug } = context.params;
	const selected = getThought(slug);
	return {
		props: { selected },
		revalidate: 600, // this affects just one page so it does not slow down the build process
	};
};
export const getStaticPaths = async () => {
	const thoughtFilenames = thoughtPaths();
	const slugs = thoughtFilenames.map((filename) =>
		filename.replace(/\.md$/, '')
	);
	const paths = slugs.map((slug) => ({ params: { slug: slug } }));
	return {
		paths: paths,
		fallback: false,
	};
};
const ThoughtDetails = ({ selected }) => {
	return (
		<>
			<Head>
				<title>{`Thoughts | ${selected.title}`}</title>
				<meta name="description" content={selected.detail} />
			</Head>
			<main className="centered">
				<ThoughtDetail thought={selected} />
			</main>
		</>
	);
};
export default ThoughtDetails;
