import React from "react";

function TicketList({ tickets }) {
  return (
    <div className="bg-white px-10 py-10 rounded-lg text-center my-10 w-full">
      {tickets.map((ticket, index) => (
        <div key={ticket._id} className="my-3 border-b-4 border-orange-300">
          <div className="flex justify-between">
            <p className="text-xl">{ticket.team}</p>
            <p className="text-xl">{index + 1}</p>
          </div>
          <p className="text-left text-sm text-gray-400">{ticket._id}</p>
        </div>
      ))}
    </div>
  );
}

export default TicketList;
