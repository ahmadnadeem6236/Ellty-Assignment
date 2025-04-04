import React from "react";
import RadioTick from "./RadioTick";

interface Props {
  label: string;
}

export default function Box({ label }: Props) {
  return (
    <div>
      <div className=" h-[42px] flex justify-between items-center px-6">
        <p className="font-normal text-sm text-[#1F2128] leading-">{label}</p>
        <RadioTick />
      </div>
    </div>
  );
}
