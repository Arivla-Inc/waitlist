import Image from "next/image";
import React from "react";

const ReasonCard = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="w-full h-[180px] relative">
        <Image src={data.imageSrc} alt={data.title} fill />
      </div>
      <div className=" text-[#101828] font-semibold text-xl mt-4 mb-2">
        {data.title}
      </div>
      <div className="font-light text-black">{data.subText}</div>
    </div>
  );
};

export default ReasonCard;
