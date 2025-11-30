import Link from "next/link";
import { FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const SocialIcons = () => {
  return (
    <div className="w-full  flex flex-col sm:flex-row sm:justify-between gap-4 my-5 bg-gray-200 p-2">
      <Link
        href={"#"}
        className="bg-blue-600 h-9 flex-1 py-1.5 sm:py-0 flex items-center justify-center"
      >
        <GrFacebookOption className="text-white text-2xl " />
      </Link>
      <Link
        href={"#"}
        className="bg-red-300 h-9 flex-1 py-1.5 sm:py-0 flex items-center justify-center"
      >
        <FaInstagramSquare className="text-white text-2xl " />
      </Link>
      <Link
        href={"#"}
        className="bg-blue-400 h-9 flex-1 py-1.5 sm:py-0 flex items-center justify-center"
      >
        <FaTwitter className="text-white text-2xl" />
      </Link>
      <Link
        href={"#"}
        className="bg-red-500 h-9 flex-1 py-1.5 sm:py-0 flex items-center justify-center"
      >
        <FaYoutube className="text-white text-2xl" />
      </Link>
    </div>
  );
};

export default SocialIcons;
