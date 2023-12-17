import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export default handler;

async function handler(req, res) {
    if (req.method === "PUT") {
        const { id } = req.query;
        console.log("id: ", id);
        const { newTitle: title, newDescription: description } = await req.body;
        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, { title, description });
        return res.status(200).json({ message: "Topic updated" })
    }

    if (req.method === "GET") {
        const { id } = req.query;
        console.log("id: ", id);
        await connectMongoDB();
        const topic = await Topic.findOne({ _id: id });
        return res.status(200).json({ topic })
    }
}