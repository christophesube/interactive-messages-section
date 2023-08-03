"use client";

import next from "next";
import CounterLike from "./CounterLike.js";
import UserContent from "./UserContent.js";
import Image from "next/image";

export default function Card() {
  const handleAnswer = () => {
    alert("hey !");
  };

  return (
    <div className="rounded-lg w-2/4 h-max p-6 mb-4 bg-white flex justify-start items-top gap-7">
      <CounterLike />
      <UserContent />
    </div>
  );
}
