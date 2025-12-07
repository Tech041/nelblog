import Image from "next/image";
import Link from "next/link";
import { LuClock4 } from "react-icons/lu";
interface RelatedPostsCardProp {
  href: string;
  title: string;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src:any
}

const RelatedPostsCard = ({href,title,publishedAt,src}:RelatedPostsCardProp) => {
  return (
    <div className="w-full md:max-w-[327px] max-h-[254px]  flex md:flex-col gap-2 border-b md:border-none pb-3 border-b-gray-200 ">
      <Link
        href={href}
        className="w-20 md:w-full  h-[60px] md:h-[137px]  relative"
      >
        <Image src={src} fill alt="Blog thumbnail" />
      </Link>
      <div className="flex-1  h-auto md:h-[137px] ">
        <Link
          href={"/jsjsjdsd"}
          className="text-[14px] md:text-lg font-semibold text-black hover:text-orange-400 line-clamp-3"
        >
         {title}
        </Link>
        <p className="md:hidden text-[10px] text-gray-300 flex items-center gap-2">
          {" "}
          <LuClock4 />
          <span className="">{publishedAt}</span>
        </p>
      </div>
    </div>
  );
};

export default RelatedPostsCard;
