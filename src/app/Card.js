"use client";

import CounterLike from "./CounterLike.js";
import UserContent from "./UserContent.js";
import ReplyCard from "./ReplyCard.js";
import { useState } from "react";
import ShortCard from "./Card";

export default function Card() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [displayCard, setDisplayCard] = useState();

  return (
    <>
      <div className="rounded-lg w-1/2 h-max p-6 mb-4 bg-white flex justify-start items-top gap-7">
        <CounterLike />
        <UserContent
          showState={show}
          setShowToParent={setShow}
          canAnswer={true}
        />
      </div>
      {show && (
        <ReplyCard
          showState={show}
          setShowToParent={setShow}
          setContent={setContent}
          getACard={setDisplayCard}
        />
      )}
      {displayCard}
    </>
  );
}
