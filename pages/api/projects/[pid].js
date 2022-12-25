import fs from 'fs';
import { dataPath, getData } from '../../../lib/fetchUtil';

export default function handler(req, res) {
	const { method, body } = req;
	const pid = req.query.pid;

	switch (method) {
		case 'GET':
			const projectData = getData('data', 'projects.json');
			const selectedProject = projectData.find((project) => project.id === pid);
			res.status(200).json({ project: selectedProject });
			break;
		case 'POST':
			const ratingData = getData('data', 'ratings.json');
			const {
				name,
				email,
				thought,
				location,
				cleanliness,
				value,
				communication,
				checkIn,
			} = body;
			if (!email || !email.includes('@')) {
				res.status(422).json({ message: 'Invalid email address' });
				return;
			}
			const newRating = {
				name,
				email,
				thought,
				location,
				cleanliness,
				value,
				communication,
				checkIn,
				pid,
				createdAt: new Date(),
			};
			ratingData.push(newRating);
			const filePath = dataPath('data', 'ratings.json');
			fs.writeFileSync(filePath, JSON.stringify(ratingData));
			res
				.status(201)
				.json({ message: 'New rating uploaded', rating: newRating });
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
