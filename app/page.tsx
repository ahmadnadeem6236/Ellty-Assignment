import Box from "./component/Box";
import Button from "./component/Button";
import Separator from "./component/Separator";

export default function Home() {
  return (
    <div className=" h-svh flex items-center justify-center">
      <div className="w-[370px] h-[326px] flex flex-col gap-5 justify-center items-center rounded-md shadow-lg border-[1px] border-[#EEEEEE]">
        <div className="w-full flex flex-col space-y-1">
          <div className="mb-3">
            <Box label="All pages" />
          </div>
          <Separator />
          <div>
            <Box label="Page 1" />
            <Box label="Page 2" />
            <Box label="Page 3" />
            <Box label="Page 4" />
          </div>
          <Separator />
        </div>
        <div>
          <Button text="Done" />
        </div>
      </div>
    </div>
  );
}
