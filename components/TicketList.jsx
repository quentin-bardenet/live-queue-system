import React, { useEffect } from "react";
import TicketItem from "./TicketItem";

function TicketList({ tickets }) {
  return (
    <div className="bg-white px-10 py-10 rounded-lg text-center my-10 w-full">
      {tickets.map((ticket, index) => (
        <TicketItem {...ticket} key={index} index={index} />
      ))}
    </div>
  );
}

export default TicketList;
