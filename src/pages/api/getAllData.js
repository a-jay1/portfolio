import { MongoClient } from "mongodb";
import nextConfig from "../../../next.config.mjs";

export default async function handler(req, res) {
    if (req.method === "GET") {

        const mongoCred = nextConfig.env.MONGODB_URI;

        const client = new MongoClient(mongoCred, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            const database = client.db("db");

            // Choose a name for your collection
            const collection = database.collection("entry");

            const allData = await collection.find({}).toArray();

            res.status(200).json(allData);
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!", error: error });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}