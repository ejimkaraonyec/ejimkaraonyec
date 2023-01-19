import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const getData = (dir, link) => {
	const dataPool = fs.readFileSync(
		path.join(process.cwd(), `${dir}`, `${link}`)
	);
	return JSON.parse(dataPool);
};
export const dataPath = (dir, link) => {
	return path.join(process.cwd(), `${dir}`, `${link}`);
};

const thoughtDir = path.join(process.cwd(), 'data/thoughts');

export const thoughtPaths = () => {
	return fs.readdirSync(thoughtDir);
};

export const getThought = (thoughtId) => {
	const thoughtSlug = thoughtId.replace(/\.md$/, ''); // removes the file extension
	const thoughtPath = path.join(thoughtDir, `${thoughtSlug}.md`);
	const thoughtContent = fs.readFileSync(thoughtPath, 'utf-8');

	const { data, content } = matter(thoughtContent);
	const thoughtData = {
		slug: thoughtSlug,
		...data,
		content,
	};
	return thoughtData;
};
export const getAllThoughts = () => {
	const thoughtFiles = thoughtPaths();

	const allThoughts = thoughtFiles.map((thoughtFile) => {
		return getThought(thoughtFile);
	});
	const sortedThoughts = allThoughts.sort((thoughtA, thoughtB) =>
		thoughtA.date > thoughtB.date ? -1 : 1
	);

	return sortedThoughts;
};
export const getFeaturedThoughts = () => {
	const allThoughts = getAllThoughts();
	const featuredThoughts = allThoughts.filter((thought) => thought.isFeatured);

	return featuredThoughts;
};
export const getFeaturedNullThoughts = () => {
	const allThoughts = getAllThoughts();
	const featuredNullThoughts = allThoughts.filter(
		(thought) => !thought.isFeatured
	);

	return featuredNullThoughts;
};
