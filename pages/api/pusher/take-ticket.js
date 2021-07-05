import { pusher } from "../../../lib/pusher";
import nextConnect from "next-connect";
import middleware from "../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const ticket = { ...req.body, done: false };

  await req.db.collection("team").insertOne(ticket);

  await pusher.trigger("ticket", "ticket-taken", ticket);

  res.json({ status: 200 });
});

export default handler;
