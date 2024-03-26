import React from "react";
import { ReasonsData } from "./data";
import ReasonsCard from "./ReasonCard";

const Reasons = () => {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-16 sm:pt-28">
      <h5 className="text-4xl font-medium  text-[#101828] font-playfair-display text-center">{`Here's why you'll want to hop on board:`}</h5>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ReasonsData.map((ev, i) => (
          <ReasonsCard key={i} data={ev} />
        ))}
      </div>
    </div>
  );
};

export default Reasons;
