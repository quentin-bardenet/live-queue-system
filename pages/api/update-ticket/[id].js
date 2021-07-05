import nextConnect from "next-connect";
import middleware from "../middleware/database";
import { ObjectId } from "mongodb";
import { pusher } from "../../../lib/pusher";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  await req.db
    .collection("team")
    .updateOne({ _id: new ObjectId(req.query.id) }, { $set: req.body });

  await pusher.trigger("ticket", "ticket-removed", { _id: req.query.id });

  res.json({ status: 200 });
});

export default handler;
