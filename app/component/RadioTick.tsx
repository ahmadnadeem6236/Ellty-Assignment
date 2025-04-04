"use client";
import { useState } from "react";
import RightIcon from "./assets/RightIcon";

export default function RadioTick() {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div>
      <div
        className={`w-[25px] h-[25px] border-[1px] rounded-[6px]  shadow flex justify-center items-center motion-reduce:transition-none hover:cursor-pointer ${
          isSelected
            ? "bg-[#2469F6]  border-[#2469F6] hover:bg-[#5087F8]"
            : "bg-white border-[#CDCDCD] hover:border-gray-500 opacity-60 "
        }`}
        onClick={handleClick}
      >
        <RightIcon
          className={`absolute  ${isSelected ? "stroke-[#FFFFFF]" : "hover:stroke-[#878787]"} motion-reduce:transition-none w-[17px] h-[15px]`}
        />
      </div>
    </div>
  );
}
