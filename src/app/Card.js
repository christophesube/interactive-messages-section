"use client";

import CounterLike from "./CounterLike.js";
import UserContent from "./UserContent.js";
import ReplyCard from "./ReplyCard.js";
import { useState } from "react";

export default function Card() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="rounded-lg w-2/4 h-max p-6 mb-4 bg-white flex justify-start items-top gap-7">
        <CounterLike />
        <UserContent showState={show} setShowToParent={setShow} />
      </div>
      {show && <ReplyCard />}
    </>
  );
}
