import Image from "next/image";
import plusPic from "../../images/icon-plus.svg";
import minusPic from "../../images/icon-minus.svg";
import { useState } from "react";

export default function CounterLike() {
  let [count, setCount] = useState(10);

  const handleCountPlus = (e) => {
    e.target.id == "plus" ? setCount(count + 1) : null;

    if (e.target.id == "minus") {
      count == 0 ? setCount(0) : setCount(count - 1);
    }
  };

  return (
    <div className="bg-cyan-300 w-16 h-24 rounded-lg flex flex-col items-center justify-around p-1 pr-2 pl-2">
      <Image
        id="plus"
        onClick={handleCountPlus}
        className="hover:cursor-pointer"
        src={plusPic}
        style={{
          width: "11px",
          height: "11px",
        }}
        alt="minus button picture"
      />
      <span className="text-blue-600 text-sm font-bold">{count}</span>
      <Image
        id="minus"
        onClick={handleCountPlus}
        className="hover:cursor-pointer"
        src={minusPic}
        style={{
          width: "11px",
          height: "3px",
        }}
        alt="minus button picture"
      />
    </div>
  );
}
