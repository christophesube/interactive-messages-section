"use client";

import Image from "next/image";
import avatar from "../../images/avatars/image-maxblagun.png";
import ShortCard from "./ShortCard.js";
import { useState } from "react";

export default function ReplyCard({
  setShowToParent,
  showState,
  setContent,
  getACard,
}) {
  const [inputValue, setInputValue] = useState("");

  const addACard = () => {
    return <ShortCard />;
  };

  return (
    <div className="rounded-lg box-border w-2/4 h-max p-6 mb-4 bg-white flex justify-between items-top gap-7">
      <Image
        src={avatar}
        style={{
          width: "50px",
          height: "50px",
        }}
        alt="avatar answer person"
      />

      <input
        type="text"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        placeholder="Add a comment..."
        className="h-24 p-4 border border-grey-500 border-neutral-300 rounded-lg text-sm text-gray-400 w-11/12 pb-16 focus:outline-none focus:ring focus:border-blue-500 "></input>
      <button
        onClick={() => {
          setShowToParent(!showState ? true : false);
          setContent(inputValue);
          getACard(addACard);
        }}
        className="bg-blue-600  px-6 py-3 rounded-lg uppercase font-medium text-sm h-max hover:bg-blue-400">
        Send
      </button>
    </div>
  );
}
