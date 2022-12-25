import fs from 'fs';
import { dataPath, getData } from '../../../lib/fetchUtil';

export default function handler(req, res) {
	const { method } = req;
	const projectData = getData('data', 'projects.json');

	switch (method) {
		case 'GET':
			res.status(200).json({ projects: projectData });
			break;
		case 'POST':
			const {
				title,
				description,
				location,
				price,
				bed,
				bath,
				rating,
				interval,
				thumbnail,
				images,
			} = req.body;
			const newLodge = {
				id: new Date().toISOString(),
				price,
				location,
				bath,
				bed,
				rating,
				interval,
				thumbnail,
				images,
				title,
				description,
			};
			projectData.push(newLodge);
			const filePath = dataPath('data', 'projects.json');
			fs.writeFileSync(filePath, JSON.stringify(projectData));
			res
				.status(201)
				.json({ message: 'New project uploaded', lodge: newLodge });
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
