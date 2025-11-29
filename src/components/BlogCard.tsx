import Image from "next/image";
import Link from "next/link";
import { LuClock4 } from "react-icons/lu";

const BlogCard = () => {
  return (
    <div className="w-full lg:max-w-[327px] max-h-[110px]  flex gap-2 my-10 border-b pb-3 border-b-gray-200 ">
      <div className="w-20 h-[60px]  relative">
        <Image src={"/images/hero_img.png"} fill alt="Blog thumbnail" />
      </div>
      <div className="flex-1 ">
        <Link
          href={"/jsjsjdsd"}
          className="text-[14px] font-semibold text-black hover:text-orange-400 line-clamp-3"
        >
          Sochima Ezeoke Sparks Debate After Claiming She Lost Movie Role for
          Not Having a ‘Hot Body’
        </Link>
        <p className="text-[10px] text-gray-300 flex items-center gap-2">
          {" "}
          <LuClock4 />
          <span className="">November 11, 2025</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
