import { useState } from "react";
import axios from "axios";

const TakeTicket = () => {
  const [team, setTeam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/pusher/take-ticket", {
      team,
      createdAt: new Date(),
    });
    setTeam("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-4 items-baseline ">
      <input
        type="text"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        className="col-span-3 focus:outline-none focus:ring-1 focus:ring-orange-500 border-2 w-full border-gray-200 rounded-l-md px-2 py-2"
        placeholder="Enter your name (or team name)"
      />
      <button
        type="submit"
        className="bg-orange-500 px-2 rounded-r-md text-white max-w-sm h-full"
      >
        Take a ticket
      </button>
    </form>
  );
};

export default TakeTicket;
