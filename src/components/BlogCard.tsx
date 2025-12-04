import Image from "next/image";
import Link from "next/link";
import { LuClock4 } from "react-icons/lu";
interface blogProp {
  href: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  publishedAt: string;
}

const BlogCard = ({ href, title, src, publishedAt }: blogProp) => {
  return (
    <div className="w-full lg:max-w-[327px] max-h-[110px]  flex gap-2 my-10 border-b pb-3 border-b-gray-200 ">
      <div className="w-20 h-[60px]  relative">
        <Image src={src} fill alt="Blog thumbnail" className="object-cover" />
      </div>
      <div className="flex-1 ">
        <Link
          href={`/${href}`}
          className="text-[14px] font-semibold text-black hover:text-orange-400 line-clamp-3"
        >
          {title}
        </Link>
        <p className="text-[10px] text-gray-300 flex items-center gap-2">
          {" "}
          <LuClock4 />
          <span className="">{publishedAt}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
