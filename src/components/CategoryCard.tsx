import Image from "next/image";
import Link from "next/link";
import { LuClock4 } from "react-icons/lu";

const CategoryCard = () => {
  return (
    <div className="w-full  max-h-[254px]  flex  gap-2 border-b  pb-4 border-b-gray-200 my-5 ">
      <div className="w-20 md:w-[30%]  h-[60px] md:h-[137px]  relative">
        <Image src={"/images/hero_img.png"} fill alt="Blog thumbnail" />
      </div>
      <div className="flex-1  h-auto md:h-[150px] ">
        <Link
          href={"/jsjsjdsd"}
          className="text-[14px] md:text-lg font-semibold text-black hover:text-orange-400 line-clamp-3"
        >
          Sochima Ezeoke Sparks Debate After Claiming She Lost Movie Role for
          Not Having a ‘Hot Body’
        </Link>
        <p className=" text-[10px] text-gray-300 flex items-center gap-2">
          <LuClock4 />
          <span className="">November 11, 2025</span>
        </p>
        <div className="hidden md:block pb-2">
          <p className=" text-sm line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptas reiciendis consectetur ullam, optio quidem. Nesciunt
            aspernatur doloremque molestiae repellendus veritatis ipsam
            laboriosam ab quia voluptatibus reiciendis, inventore iste veniam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
