// import sgMail from '@sendgrid/mail';
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(`${SENDGRID_API_KEY}`);

export default async function handler(req, res) {
	const { method, body } = req;

	switch (method) {
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

			const msg = {
				to: `${TO_EMAIL}`,
				from: `${FROM_EMAIL}`,
				subject: `New interest on ${interest}`,
				html: `<h4 style='text-align: center'>Message from <strong>${name}</strong></h4>
        <p>Contact: <strong>${contact}</strong></p>
        <p>Interest: <strong>${interest}</strong></p>
        <p>Message: <strong>${message}</strong></p>`,
			};
			try {
				await sgMail.send(msg);
				res.status(201).json({
					message: 'Message sent!',
					collection: { name, contact, message, interest },
				});
			} catch (error) {
				res.status(500).json({ message: 'Failled to send message!' });
			}
			break;
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
