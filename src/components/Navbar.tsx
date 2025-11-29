"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/uils/navLinks";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUiStore } from "@/store/uiStore";

const Navbar = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();

  return (
    <header className=" w-full  text-black mb-5 ">
      <div className="min-h-[202px] w-full  lg:px-5">
        {/* desktop */}
        <div className="hidden md:block w-full h-full pt-3 lg:pt-5">
          <div className="w-full h-[50%] ">
            <Link href={"/"}>
              <Image
                src={"/images/site_logo.webp"}
                width={150}
                height={82}
                alt="Logo"
              />
            </Link>
            <p className="italic text-sm text-black/50">
              Serving you with latest health-tech gists
            </p>
          </div>
          <div className="w-[23%] h-[0.25px] bg-gray-300 my-1" />
          <div className=" uppercase text-xs lg:text-sm font-semibold  text-orange-400 mt-3  ">
            Latest tech news and opportunities across the globe
          </div>
          <div className="w-full   flex  flex-col justify-center  mt-2 bg-white">
            <div className="w-full bg-black">
              <nav className="w-full  text-white">
                <ul className="flex gap-3">
                  {navLinks.map((link) => (
                    <li
                      key={link.title}
                      className="uppercase text-sm font-semibold hover:bg-orange-400 hover:text-white px-5 py-3"
                    >
                      <Link href={`/category/${link.path}`}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p className=" text-sm text-orange-400 flex items-center text-nowrap bg-[#F7F7F7] ">
              <span className="bg-orange-400 text-white py-2 pl-5 pr-3 mr-4 flex items-center gap-1">
                <span className="font-semibold">Latest update</span>{" "}
                <IoMdArrowRoundForward
                  size={17}
                  className="text-white mt-[0.5px]"
                />
              </span>
              <span className="italic ">
                [ November 27, 2025 ] Nigerian Actress Seeks UK Asylum, Says
                Fame Endangers Her Life After
              </span>
            </p>
          </div>
        </div>
        {/* mobile */}

        <div className="w-full md:hidden">
          <div className=" w-full h-11 flex items-center justify-between bg-orange-400 border-b border-b-black text-white">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-end gap-2 items-center px-3  ">
              <span className="font-bold">Menu</span>
              <div onClick={toggleMobileNav} className="cursor-pointer">
                {isMobileNavOpen ? (
                  <IoCloseSharp className="w-6 h-6 text-white" />
                ) : (
                  <GiHamburgerMenu className={`  text-white   w-5 h-5`} />
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden bg-orange-400 transition-all duration-700 ease-in-out 
    ${isMobileNavOpen ? "h-[248px]" : "h-0"}`}
          >
            <nav className="w-full py-5">
              <ul className="w-full flex flex-col capitalize pl-5 ">
                {navLinks.map((link) => (
                  <li
                    onClick={toggleMobileNav}
                    key={link.path}
                    className="py-2 font-semibold text-white text-sm"
                  >
                    <Link href={`/category/${link.path}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className=" w-full flex justify-center mt-5 mb-1 ">
            <div className=" relative">
              <Link className="" href={"/"}>
                <Image
                  src={"/images/site_logo.webp"}
                  width={150}
                  height={82}
                  alt="Logo"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="max-w-[426px] mx-auto h-[0.25px] bg-gray-300" />
          <div className="max-w-[426px] mx-auto uppercase text-xs lg:text-sm font-semibold  text-orange-400 mt-3 px-3 text-center ">
            Latest tech news and opportunities across the globe
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
