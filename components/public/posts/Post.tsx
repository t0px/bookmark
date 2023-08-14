"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";

type PostProps = {
  post: {
    author?: string;
    title: string;
    body: string;
  };
};

const Post = ({ post }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="h-62 flex-1 bg-white rounded-md shadow-md flex flex-col gap-2 p-4">
      <div>
        <div className="flex gap-2 items-center">
          <div className="w-11 h-11 rounded-full gradient"></div>
          <div className="flex flex-col">
            <span className="font-bold">Full Name</span>
            <span className="text-xs text-neutral-500">2 min</span>
          </div>
        </div>
        <div></div>
      </div>
      <p>{post.body}</p>
      <div className="flex gap-2 items-center">
        <div className="h-80 w-full rounded-md gradient"></div>
        <div className="h-80 w-full rounded-md gradient"></div>
      </div>
      <div className="flex gap-2 items-center justify-between text-neutral-500">
        <div className="items-center flex gap-2">
          <Button
            className="text-2xl cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            {!isLiked ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </Button>
          <Button
            className="text-2xl cursor-pointer"
            size="icon"
            variant="ghost"
          >
            <FaComments />
          </Button>
        </div>
        <Button className="text-2xl cursor-pointer" size="icon" variant="ghost">
          <BiSolidShareAlt />
        </Button>
      </div>
      <hr />
    </article>
  );
};

export default Post;
