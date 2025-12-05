import Image from "next/image";
import Link from "next/link";
import { LuClock4 } from "react-icons/lu";
interface categoryProp {
  href: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
}
const CategoryCard = ({
  href,
  title,
  src,
  publishedAt,
  content,
}: categoryProp) => {
  return (
    <div className="w-full  max-h-[254px]  flex  gap-2 border-b  pb-4 border-b-gray-200 my-5 ">
      <div className="w-20 md:w-[30%]  h-[60px] md:h-[137px]  relative">
        <Image src={src} fill alt="Blog thumbnail" />
      </div>
      <div className="flex-1  h-auto md:h-[150px] ">
        <Link
          href={`/${href}`}
          className="text-[14px] md:text-lg font-semibold text-black hover:text-orange-400 line-clamp-3"
        >
          {title}
        </Link>
        <p className=" text-[10px] text-gray-300 flex items-center gap-2">
          <LuClock4 />
          <span className="">{publishedAt}</span>
        </p>
        <div className="hidden md:block pb-2">
          <div className=" text-sm line-clamp-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
