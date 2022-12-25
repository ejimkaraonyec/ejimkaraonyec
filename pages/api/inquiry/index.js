import fs from 'fs';
import { dataPath, getData } from '../../../lib/fetchUtil';

export default function handler(req, res) {
	const { method, body } = req;
	const inquire = getData('data', 'inquiry.json');

	switch (method) {
		case 'GET':
			res.status(200).json({ collection: inquire });
			break;
		case 'POST':
			const { name, contact, message, interest } = body;
			let emptyFields = [];
			if (!name) {
				emptyFields.push('name');
			}
			if (!contact) {
				emptyFields.push('contact');
			}
			if (!message) {
				emptyFields.push('message');
			}
			if (emptyFields.length > 0) {
				return res.status(422).json({
					message: 'Please fill in all the fields',
					collection: emptyFields,
				});
			}
			const newInquiry = {
				id: new Date().toISOString(),
				interest,
				name,
				contact,
				message,
			};
			inquire.push(newInquiry);
			const filePath = dataPath('data', 'inquiry.json');
			fs.writeFileSync(filePath, JSON.stringify(inquire));
			res.status(201).json({
				message: 'Message sent!',
				collection: newInquiry,
			});
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
