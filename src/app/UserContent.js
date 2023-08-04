import { useState } from "react";
import amy from "../../images/avatars/image-amyrobson.png";
import Image from "next/image";
import reply from "../../images/icon-reply.svg";

export default function UserContent({ setShowToParent, showState, canAnswer }) {
  const [content, setContent] = useState(
    " Hello I really like what you're doing ! Hello I really like what you're doing ! Hello I really like what you're doing ! Hello I really like what you're doing ! Hello I really like what you're doing ! Hello I really like what you're doing !"
  );
  const [username, setUsername] = useState("amyrobson");

  return (
    <div>
      <div className="h-max">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-4/5">
            <Image
              id="plus"
              className="mr-4"
              src={amy}
              width={500}
              height={500}
              style={{
                width: "30px",
                height: "30px",
              }}
              alt="minus button picture"
            />
            <span className="mr-4 text-gray-900 font-bold">{username}</span>
            <span className="text-gray-400">1 week ago</span>
          </div>
          {canAnswer && (
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={() => setShowToParent(!showState ? true : false)}>
              <Image
                className=""
                src={reply}
                style={{
                  width: "13px",
                  height: "14px",
                }}
                alt="minus button picture"
              />
              <span className="text-blue-600 ml-2 ">Reply</span>
            </div>
          )}
        </div>
        <p className="mt-4 text-gray-400">
          <span className="text-blue-600">@maxblagun </span>
          {content}
        </p>
      </div>
    </div>
  );
}
