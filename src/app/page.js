import Image from "next/image";
import Header from "./Header.js";
import Card from "./Card.js";
import ReplyCard from "./ReplyCard.js";
import ShortCard from "./ShortCard.js";

export default function Home() {
  return (
    <div className="p-20">
      <Card />
    </div>
  );
}
