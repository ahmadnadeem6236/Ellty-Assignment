import Button from "./component/Button";
import RadioTick from "./component/RadioTick";

export default function Home() {
  return (
    <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
      <Button text="Done" />
      <RadioTick />
    </div>
  );
}
