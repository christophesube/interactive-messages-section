"use client";

import CounterLike from "./CounterLike.js";
import UserContent from "./UserContent.js";
import ReplyCard from "./ReplyCard.js";
import { useState } from "react";

export default function ShortCard() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="flex w-1/2 justify-end">
        <div className="rounded-lg w-4/5 h-max p-6 mb-4 bg-white flex justify-start items-top gap-7">
          <CounterLike />
          <UserContent
            showState={show}
            setShowToParent={setShow}
            canAnswer={false}
          />
        </div>
      </div>
    </>
  );
}
