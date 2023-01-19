import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/prism/night-owl';
import styles from '../../styles/Thoughts.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

export const NotFeatured = ({ thoughts }) => {
	return (
		<section className={styles.notFeatured}>
			{thoughts.length > 0 &&
				thoughts.map((thought) => {
					const { title, excerpt, date, slug } = thought;
					return (
						<Link
							href={`/thoughts/${slug}`}
							key={thought.slug}
							className={styles.thoughtItem}
						>
							<h2 className={`ht3 brand ${styles.thoughtTitle}`}>{title}</h2>
							{thought.updateDate && (
								<time className={`ht5 italic ${styles.thoughtDate}`}>
									{formatedDate(thought.updateDate)}
								</time>
							)}
							{!thought.updateDate && (
								<time className={`ht5 italic ${styles.thoughtDate}`}>
									{formatedDate(date)}
								</time>
							)}
							<p className={styles.thoughtExcerpt}>{excerpt}</p>
						</Link>
					);
				})}
		</section>
	);
};
export function ThoughtCard({ thought }) {
	const { title, image, excerpt, date, slug } = thought;
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	return (
		<Link
			href={`/thoughts/${slug}`}
			className={`${styles.thoughtCard} ${inView ? styles.thoughtAppear : ''}`}
			ref={ref}
		>
			<figure className={styles.cardImage}>
				<Image
					src={`/thoughts/${slug}/${image}`}
					fill
					sizes="50vw"
					alt={title}
					className={styles.thoughtImg}
				/>
			</figure>
			<div className={styles.content}>
				<h2 className={`ht3 brand ${styles.thoughtTitle}`}>{title}</h2>
				{thought.updateDate && (
					<time className={`ht5 italic ${styles.thoughtDate}`}>
						{formatedDate(thought.updateDate)}
					</time>
				)}
				{!thought.updateDate && (
					<time className={`ht5 italic ${styles.thoughtDate}`}>
						{formatedDate(date)}
					</time>
				)}
				<p className={styles.thoughtExcerpt}>{excerpt}</p>
			</div>
		</Link>
	);
}
export function ThoughtDetail({ thought }) {
	const { title, image, slug, date, content } = thought;

	const customComponents = {
		p({ node, children }) {
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<figure className={styles.image}>
						<Image
							src={`/thoughts/${slug}/${image.properties.src}`}
							alt={image.properties.alt}
							fill
							sizes="100vw"
						/>
					</figure>
				);
			}

			if (children.length === 1 && node.children[0].tagName === 'a') {
				console.log(children);
				const link = node.children[0];
				return (
					<a
						title={link.children[0].value}
						href={link.properties.href}
						target="_blank"
						rel="noreferrer"
						className={styles.link_block}
					>
						{link.children[0].value}
					</a>
				);
			}
			if (node.children[0].tagName === 'code') {
				return <>{children}</>;
			}

			return <p>{children}</p>;
		},

		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					customStyle={{
						borderRadius: '0.4rem',
						backgroundColor: 'hsl(212 97% 12%)',
					}}
					// children={String(children).replace(/\n$/, '')}
					style={nightOwl}
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={styles.code} {...props}>
					{children}
				</code>
			);
		},
	};

	return (
		<>
			<section className={styles.detailContent}>
				<header className={`flex-col ${styles.header}`}>
					<h2 className="ht3 brand">{title}</h2>
					{/* <Image
						src={`/thoughts/${slug}/${image}`}
						alt={title}
						width={200}
						height={150}
					/> */}
					{thought.updateDate && (
						<div className="flex" style={{ gap: '2rem' }}>
							<time className={`ht5 italic ${styles.thoughtDate}`}>
								Written {formatedDate(updateDate)}
							</time>
							<time className={`ht5 italic ${styles.thoughtDate}`}>
								updated {formatedDate(updateDate)}
							</time>
						</div>
					)}
					{!thought.updateDate && (
						<time className={`ht5 italic ${styles.thoughtDate}`}>
							{formatedDate(date)}
						</time>
					)}
				</header>
				<article className={styles.markdown}>
					{/* <ReactMarkdown>{content}</ReactMarkdown> */}
					<ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
				</article>
			</section>
		</>
	);
}
const formatedDate = (date) => {
	return new Date(date).toLocaleDateString('en-UK', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
};
