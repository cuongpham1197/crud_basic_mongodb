// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Topic from "@/models/topic";
import connectMongoDB from "@/libs/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, description } = await req.body;
    await connectMongoDB();
    await Topic.create({ title, description });
    res.status(201).json({ message: "Topic Created" })
  }

  if (req.method === "GET") {
    await connectMongoDB();
    const topics = await Topic.find();
    return res.status(200).json({ topics });
  }

  if (req.method === "DELETE") {
    const id = req.query.id;
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    res.status(200).json({ message: "Topic Deleted" })
  }
}
