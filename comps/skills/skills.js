import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/Skills.module.css';

export function SkillCard({ skill }) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	return (
		<>
			{skill && (
				<Link
					href={`/skills/${skill.id}`}
					key={skill.id}
					className={`${styles.skillCard} ${inView ? styles.skillAppear : ''}`}
					ref={ref}
				>
					<Image
						src={skill.logo}
						width="0"
						height="0"
						alt={skill.title}
						priority="true"
						style={{ width: 'auto', height: 'auto' }}
						className={styles.skillImg}
					/>
					<div className="flex-col gap-f">
						<h2 className={`ht3 brand just-right ${styles.skillTitle}`}>
							{skill.title}
						</h2>
						<p className={`ht5 just-right ${styles.skillItalic}`}>
							{skill.quals}
						</p>
					</div>
					<p className={styles.skillDetails}>{skill.detail}</p>
					<div className={styles.skillTools}>
						{skill.tools.map((tool, index) => (
							<button
								disabled="disabled"
								aria-label={tool.name}
								key={index}
								className="aria-right btn"
							>
								<Image
									src={tool.src}
									width="0"
									height="0"
									alt={tool.name}
									priority="true"
									style={{ width: 'auto', height: 'auto' }}
								/>
							</button>
						))}
					</div>
				</Link>
			)}
		</>
	);
}
export function SkillDetail({ skill }) {
	return (
		<>
			<div className={styles.content}>
				<h2 className="ht4">{skill.qualification}</h2>
				<p className="ht5 italic">{skill.institution}</p>
				<div className={styles.detail}>
					<p>{skill.detail}</p>
				</div>
				{skill.external.online && (
					<p>
						<span>{skill.external.text}</span>{' '}
						<a
							className="brand"
							href={`${skill.external.link}`}
							target="_blank"
							title={`${skill.external.name}`}
							rel="noopener noreferrer"
						>
							{skill.external.name}
						</a>
						, <span>{skill.external.pre}</span>{' '}
						<a
							className="brand"
							href={`${skill.external.socialLink}`}
							title={`${skill.external.socialText}`}
						>
							{skill.external.socialText}
						</a>
						.
					</p>
				)}
				{!skill.external.online && (
					<p>
						<span>{skill.external.pre}</span>{' '}
						<a
							className="brand"
							href={`${skill.external.socialLink}`}
							title={`${skill.external.socialText}`}
						>
							{skill.external.socialText}
						</a>
						.
					</p>
				)}
			</div>
		</>
	);
}
