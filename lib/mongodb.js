import { MongoClient } from 'mongodb';

export const connectDb = async (uri) => {
	const client = await MongoClient.connect(uri);
	return client;
};

export const insertDococument = async (client, dbase, collection, doc) => {
	const db = client.db(dbase);
	const result = await db.collection(collection).insertOne(doc);
	return result;
};

export const getDocuments = async (
	client,
	dbase,
	collection,
	sort,
	filter = {}
) => {
	const db = client.db(dbase);
	const documents = await db
		.collection(collection)
		.find(filter)
		.sort(sort)
		.toArray();
	return documents;
};
