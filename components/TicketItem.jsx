import React, { useEffect, useState } from "react";
import timeConverter from "../services/time";

function TicketItem({ _id, team, index, createdAt }) {
  const [waitingTime, setWaitingTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const createdTime = new Date(createdAt);
      const now = new Date();

      const elapsed = now - createdTime;
      setWaitingTime(timeConverter(parseInt(elapsed / 1000)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={_id} className="my-3 border-b-4 border-orange-300">
      <div className="flex justify-between">
        <p className="text-xl">{team}</p>
        <p className="text-xl">#{index + 1}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-left text-sm text-gray-400">{_id}</p>
        <p className="text-left text-sm text-gray-500">
          Waiting Time : {waitingTime}
        </p>
      </div>
    </div>
  );
}

export default TicketItem;
