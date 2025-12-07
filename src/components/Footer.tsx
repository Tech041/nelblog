"use client";
import Link from "next/link";
import { footerLinks } from "@/uils/navLinks";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUiStore } from "@/store/uiStore";

const Footer = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();

  return (
    <header className=" w-full h-full text-black  ">
      <div className=" w-full ">
        {/* desktop */}
        <div className="hidden md:block w-full h-full">
          <div className="w-full   flex  flex-col justify-center bg-white">
            <div className="w-full bg-orange-400">
              <nav className="w-full flex justify-center  text-white">
                <ul className="flex gap-3">
                  {footerLinks.map((link) => (
                    <li
                      key={link.title}
                      className="uppercase text-[10px] font-light hover:bg-orange-400 hover:text-white px-5 py-3"
                    >
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
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
    ${isMobileNavOpen ? "h-[200px]" : "h-0"}`}
          >
            <nav className="w-full py-5">
              <ul className="w-full flex flex-col capitalize pl-5 ">
                {footerLinks.map((link) => (
                  <li
                    onClick={toggleMobileNav}
                    key={link.path}
                    className="py-2 font-semibold text-white text-sm"
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full h-[41px] bg-black text-white flex items-center justify-center">
          <p className="text-center text-xs">
            Copyright © {new Date().getFullYear()} NaijaJobsHub Inc. All Rights
            Reserved
          </p>
        </div>
      </div>
    </header>
  );
};

export default Footer;
