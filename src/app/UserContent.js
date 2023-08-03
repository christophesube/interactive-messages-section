import { useState } from "react";
import avatar from "../../images/avatars/image-amyrobson.png";
import Image from "next/image";
import reply from "../../images/icon-reply.svg";

export default function UserContent() {
  const [content, setContent] = useState(
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
  );
  const [username, setUsername] = useState("amyrobson");
  const [click, setClicked] = useState(false);

  return (
    <div>
      <div className="h-max">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              id="plus"
              className="mr-4"
              src={avatar}
              style={{
                width: "30px",
                height: "30px",
              }}
              alt="minus button picture"
            />
            <span className="mr-4 text-gray-900 font-bold">{username}</span>
            <span className="text-gray-400">1 week ago</span>
          </div>
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => setClicked(true)}>
            <Image
              className=""
              src={reply}
              width={14}
              height={13}
              alt="minus button picture"
            />
            <span className="text-blue-600 ml-2 ">Reply</span>
          </div>
        </div>
        <p className="mt-4 text-gray-400">
          <span className="text-blue-600">@maxblagun </span>
          {content}
        </p>
      </div>
    </div>
  );
}
