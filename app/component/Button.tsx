"use client";
interface btnStyle {
  text: string;
}

export default function Button({ text }: btnStyle) {
  return (
    <button
      onClick={() => {
        console.log("Button clicked");
      }}
      className=" h-[40px] w-[340px] rounded-sm bg-[#FFCE22] flex justify-center items-center hover:bg-[#FFD84D] hover:cursor-pointer motion-reduce:transition-none"
    >
      <p className="font-normal text-sm text-[#1F2128] leading-5">{text}</p>
    </button>
  );
}
