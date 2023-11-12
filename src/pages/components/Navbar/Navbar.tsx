import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Link from 'next/link';
import { navVariants } from '../../../utils/motion';
import { motion } from "framer-motion";
import Image from "next/image";

interface NavItems {
  label: string;
  page: string;
  index: number;
}

const NAV_ITEMS: Array<NavItems> = [
  {
    label: "Home",
    page: "#home",
    index: 0,
  },
  {
    label: "About",
    page: "#about",
    index: 1,
  },
  {
    label: "Skills",
    page: "#skills",
    index: 2,
  },
  {
    label: "Projects",
    page: "#projects",
    index: 3,
  },
  {
    label: "Contact",
    page: "#contact",
    index: 4,
  }
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="h-10 text-xl text-white-500 w-7" role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <motion.div
        initial={{ y: 0, opacity: 0 }}
        viewport={{ once: false }}
        whileInView={{ y: [-150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=""
      >
        <MoonIcon className="h-10 text-gray-900 w-7 " role="button" onClick={() => setTheme('dark')} />
        </motion.div>
      )
    }
  };



  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`p-5 sticky top-0 z-50 bg-white`} id="navbar"
    >
      <div className="flex items-center justify-around gap-10 mx-10">
        <div className="flex gap-1 text-xl font-bold cursor-pointer">
          <Link href="#home" scroll={false}>
            {" "}
            <div className="flex items-center justify-center gap-2">
            <Image loading="lazy"   width={40}
  height={40} src="https://i.ibb.co/tHhKDZZ/Screenshot-2023-03-01-at-11-08-19-removebg-preview.png" alt="woman-computer-icon" />
              <h2 className="text-2xl">
                klubinska.dev
              </h2>
            </div>
          </Link>
        </div>
        <div className={`flex items-center gap-3 md:gap-10 font-semibold ${navbar ? "showMobileNav" : ""} `}>
          <button id="hamburger-btn" onClick={() => setNavbar(!navbar)} className={`flex mt-1 items-center lg:hidden lg:${navbar === false}`}> {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} aria-label="hamburger-menu"/>}</button>
          {NAV_ITEMS.map((item) => {
            return (
              <Link
                scroll={false}
                href={item.page}
                key={item.index}
                className={`hidden ${navbar ? 'showList' : ''} lg:flex cursor-pointer before:hidden before:lg:absolute before:block before:w-full before:h-[3px] 
                before:bottom-0 before:left-0 before:bg-[#839788] 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300`}

              >
                {item.label}
              </Link>
            );
          })}
          {renderThemeChanger()}
        </div>
      </div>
      <hr id="navbar-hr" className="mt-5 bg-gray-100 mx-10 mb-[-20px] mx-10" />
    </motion.div>
  );
};

export default Navbar;
