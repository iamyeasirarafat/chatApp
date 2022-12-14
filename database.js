import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const url = "mongodb+srv://admin:3sla4mFX4iKtEFXc@cluster.wg4n9fk.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    await client.connect();
    req.dbClient = client;
    req.db = client.db('ChatApp');
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;