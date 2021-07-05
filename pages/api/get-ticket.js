import nextConnect from "next-connect";
import middleware from "./middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const allTickets = [];
  const tickets = await req.db
    .collection("team")
    .find({ done: false })
    .sort({ createdAt: 1 });

  await tickets.forEach((document) => allTickets.push(document));

  res.json(allTickets);
});

export default handler;
