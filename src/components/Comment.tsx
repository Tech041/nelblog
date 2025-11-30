"use client";
import Link from "next/link";
import { useState } from "react";
import { FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const Comment = () => {
  const [comment, setComment] = useState("");

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Comment is:", comment);
  };

  return (
    <form onSubmit={handleSubmitComment} className="w-full bg-gray-200 p-4 mt-10">
        <h1 className="pb-2 text-base md:text-2xl text-orange-500 font-semibold">Leave a reply</h1>
      <div className="w-full h-24 bg-white">
        <input
          type="text"
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
          className="placeholder:pl-2 border-none outline-none w-full px-4 py-3"
          placeholder="Write comment ..."
        />
      </div>
      <div
        className={`w-full  flex items-center  bg-gray-200 transition-all duration-700 ease-in-out border-r border-l border-r-gray-100 border-l-gray-100  border-t border-t-gray-300 ${
          comment === "" ? "h-0" : " h-24"
        }`}
      >
        <div
          className={`w-full px-3 flex items-center gap-4 ${
            comment === "" && "hidden"
          }`}
        >
          <Link
            href={"#"}
            className="h-10 w-10 flex items-center justify-center bg-blue-600 rounded-full"
          >
            <GrFacebookOption className="text-white text-xl " />
          </Link>{" "}
          <Link
            href={"#"}
            className="h-10 w-10 flex items-center justify-center bg-red-400 rounded-full"
          >
            <FaInstagramSquare className="text-white text-xl " />
          </Link>{" "}
          <Link
            href={"#"}
            className="h-10 w-10 flex items-center justify-center bg-blue-400 rounded-full"
          >
            <FaTwitter className="text-white text-xl" />
          </Link>{" "}
          <Link
            href={"#"}
            className="h-10 w-10 flex items-center justify-center bg-red-600 rounded-full"
          >
            <FaYoutube className="text-white text-xl" />
          </Link>{" "}
        </div>
      </div>
      <div className="h-[66px] w-full bg-white flex justify-end items-center px-3 border-t border-t-gray-300">
        <button
          disabled={comment === ""}
          type="submit"
          className="px-4 py-2 bg-gray-100 cursor-pointer text-gray-500 text-sm rounded-md border border-gray-100 disabled:cursor-not-allowed"
        >
          Comment
        </button>
      </div>
    </form>
  );
};

export default Comment;
