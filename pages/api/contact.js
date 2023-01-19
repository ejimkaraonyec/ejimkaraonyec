const mail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;
mail.setApiKey(SENDGRID_API_KEY);

export default function handler(req, res) {
	const { body } = req;
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
	const message_data = `
      Name: ${name}\r\n
      Contact: ${contact}\r\n
      Interest: ${interest}\r\n
      Message: ${message}\r\n
   `;

	const msg = {
		to: 'ejimkaraonyec@gmailcom',
		from: 'info@ejimkaraonyec.com',
		subject: `New interest on ${interest}`,
		text: message_data,
		html: message_data.replace(/\r\n/g, '<br>'),
	};
	mail.send(msg).then(
		() => {},
		(error) => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
	res.status(200).json({ status: 'Ok' });
}
