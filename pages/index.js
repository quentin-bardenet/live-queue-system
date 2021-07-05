import axios from "axios";
import TakeTicket from "../components/TakeTicket";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import TicketList from "../components/TicketList";
import useSound from "use-sound";

const Queue = () => {
  const [tickets, setTickets] = useState([]);
  const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
    cluster: "eu",
    authEndpoint: `api/pusher/auth`,
    auth: {},
  });

  const [playDing] = useSound("/sounds/ding.mp3", { volume: 0.8 });

  useEffect(() => {
    axios.get("/api/get-ticket").then((res) => setTickets(res.data));
  }, []);

  useEffect(() => {
    const channel = pusher.subscribe("ticket");

    channel.bind("ticket-taken", function (data) {
      playDing();
      setTickets((prev) => [...prev, data]);
    });

    channel.bind("ticket-removed", function (data) {
      playDing();
      setTickets((prev) => prev.filter((item) => item._id !== data._id));
    });

    return () => {
      pusher.unsubscribe("ticket");
    };
  }, []);

  return (
    <div className="flex m-auto items-center justify-center flex-col min-h-screen bg-orange-500 pt-6">
      <div className="mb-5">
        <h1 className="text-5xl text-white m-auto text-center">Urturn</h1>
        <p className="text-gray-200 text-center">Take a ticket</p>
      </div>

      <div>
        <div className="flex bg-white px-10 py-10 rounded-lg text-center">
          {/* Input field (name) + button */}
          <TakeTicket />
        </div>

        {/* List of waiting users (with counter ?) */}
        <TicketList tickets={tickets} />
      </div>
    </div>
  );
};

export default Queue;
