import Head from 'next/head';
import { ProjectCard } from '../../comps/projects/projects';
import { getData } from '../../lib/fetchUtil';
import styles from '../../styles/Projects.module.css';

export const getStaticProps = async () => {
	const projects = getData('data', 'projects.json');

	return {
		props: { projects },
	};
};

export default function Projects({ projects }) {
	return (
		<>
			<Head>
				<title>ejimkaraonyec | projects</title>
				<meta
					name="description"
					content="Featured projects of Ejimkaraonye, Chukwuemeka, an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions."
				/>
			</Head>
			{/* <h2 className="ht2 title brand">Projects</h2> */}
			<div className={styles.projectCards}>
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</>
	);
}
