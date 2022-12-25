import Head from 'next/head';
import { ProjectDetail } from '../../comps/projects/projects';
import { Inquiry } from '../../comps/ui/ui';
import { getData } from '../../lib/fetchUtil';
// import styles from '../../styles/Projects.module.css';

export const getStaticProps = async (context) => {
	const pid = context.params.pid;
	const projects = getData('data', 'projects.json');
	const selected = projects.find((project) => project.id === pid);

	return {
		props: { project: selected },
	};
};
export const getStaticPaths = async () => {
	const projects = getData('data', 'projects.json');
	const paths = projects.map((project) => ({ params: { pid: project.id } }));

	return {
		paths: paths,
		fallback: false,
	};
};
const ProjectDetails = ({ project }) => {
	return (
		<>
			<Head>
				<title>{`Featured | ${project.title}`}</title>
				<meta name="description" content={project.detail[0]} />
			</Head>
			<main className="centered">
				<h2 className="ht3 title brand">Featured | {project.title}</h2>
				<ProjectDetail project={project} />
				<Inquiry interest={project.title} />
			</main>
		</>
	);
};
export default ProjectDetails;
