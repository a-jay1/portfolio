import { MongoClient } from "mongodb";
import nextConfig from "../../../next.config.mjs";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { data } = req.body;

        const mongoCred = nextConfig.env.MONGODB_URI;

        const client = new MongoClient(mongoCred, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            // Choose a name for your database
            const database = client.db("db");

            // Choose a name for your collection
            const collection = database.collection("entry");

            await collection.insertOne({ data });

            res.status(201).json({ message: "Data saved successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}