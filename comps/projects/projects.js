import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { shimmer, toBase64 } from '../../lib/shimmer';
import styles from '../../styles/Projects.module.css';
import { Images } from '../ui/images';

export function ProjectCard({ project }) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	return (
		<>
			{project && (
				<Link
					href={`/projects/${project.id}`}
					// passHref
					key={project.id}
					className={`${styles.projectCard} ${
						inView ? styles.projectAppear : ''
					}`}
					ref={ref}
				>
					<div className={styles.projectContent}>
						<div className="flex-col gap-f">
							<h2 className={`ht5 brand ${styles.cat}`}>{project.cat}</h2>
							<p className={`ht3 accent ${styles.ttitle}`}>{project.title}</p>
						</div>
						<div className={styles.projectBox}>
							<p>{project.detail[0]}</p>
						</div>
						<div className={styles.projectTools}>
							{project.tools.map((tool, index) => (
								<button
									disabled="disabled"
									type="button"
									aria-label={tool.name}
									key={index}
									className={styles.btn_aria}
								>
									<Image
										src={tool.src}
										width="0"
										height="0"
										alt={tool.name}
										priority
										style={{ width: 'auto', height: 'auto' }}
									/>
								</button>
							))}
						</div>
					</div>
					<figure className={styles.projectStyle}>
						<Image
							className={styles.graphic}
							src={project.graphic}
							alt={project.id}
							fill
							sizes="100vw"
							placeholder="blur"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(250, 100)
							)}`}
						/>
					</figure>
				</Link>
			)}
		</>
	);
}
export function ProjectDetail({ project }) {
	return (
		<>
			<section className={styles.content}>
				<h2 className="ht4">{project.cat}</h2>
				<div className={`flow ${styles.details}`}>
					{project.detail.map((det, index) => (
						<p key={index}>{det}</p>
					))}
				</div>
				{project.expanded.length > 0 && (
					<div className={`flow ${styles.expanded}`}>
						{project.expanded.map((det, index) => (
							<p key={index}>{det}</p>
						))}
					</div>
				)}
				{project.slides && project.slides.length > 0 && (
					<Images slides={project.slides} />
				)}
				{project.external.online && (
					<p>
						<span>{project.external.text}</span>{' '}
						<a
							className="brand"
							href={`${project.external.link}`}
							target="_blank"
							title={`${project.external.name}`}
							rel="noopener noreferrer"
						>
							{project.external.name}
						</a>
						, <span>{project.external.pre}</span>{' '}
						<a
							className="brand"
							href={`${project.external.socialLink}`}
							title={`${project.external.socialText}`}
						>
							{project.external.socialText}
						</a>
						.
					</p>
				)}
				{!project.external.online && (
					<p>
						<span>{project.external.pre}</span>{' '}
						<a
							className="brand"
							href={`${project.external.socialLink}`}
							title={`${project.external.socialText}`}
						>
							{project.external.socialText}
						</a>
						.
					</p>
				)}
			</section>
		</>
	);
}
