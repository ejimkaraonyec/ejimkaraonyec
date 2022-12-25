import {
	connectDb,
	getDocuments,
	insertDococument,
} from '../../../lib/mongodb';

export default async function handler(req, res) {
	const { method, body } = req;

	let client;
	try {
		client = await connectDb(`${process.env.MONGODB_URI}`);
	} catch (error) {
		res.status(500).json({
			message: 'Could not establish connection to the database!',
		});
		return;
	}

	switch (method) {
		case 'GET':
			try {
				const documents = await getDocuments(
					client,
					'ejimkaraonyec',
					'enquiries',
					{
						_id: -1,
					}
				);
				res.status(200).json({ collection: documents });
			} catch (error) {
				res.status(500).json({ message: 'Failled to get enquiries!' });
			}
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
				res.status(422).json({
					message: 'Please fill in all the fields',
					collection: emptyFields,
				});
				client.close();
				return;
			}

			const newInquiry = {
				interest,
				name,
				contact,
				message,
			};
			try {
				await insertDococument(
					client,
					'ejimkaraonyec',
					'enquiries',
					newInquiry
				);
				res
					.status(201)
					.json({ message: 'Message sent!', collection: newInquiry });
			} catch (error) {
				res.status(500).json({ message: 'Failled to send message!' });
			}
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
	client.close();
}
