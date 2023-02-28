import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {useTheme} from "next-themes";
import{ SunIcon ,MoonIcon } from "@heroicons/react/solid";
import  Link  from 'next/link';
import { navVariants } from '../../../utils/motion';
import { motion } from "framer-motion";

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
  },
  // {
  //   label: "Blog",
  //   page: "blog",
  //   index: 5,
  // },
];

const Navbar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);

  

  //checking the scroll position and underline current section
  useEffect(() => {
    setMounted(true);
    const setButtonIndex = () => {
      if (window.scrollY >= -150) {
        setActiveButtonIndex(0);
      }
      if (window.scrollY >= 150) {
        setActiveButtonIndex(1);
      }
      if (window.scrollY >= 640) {
        setActiveButtonIndex(2);
      }
      if (window.scrollY >= 2350) {
        setActiveButtonIndex(3);
      }
      if (window.scrollY >= 3900) {
        setActiveButtonIndex(4);
      }
    };
    window.addEventListener("scroll", setButtonIndex);
    console.log("Index:" + activeButtonIndex);
  }, [activeButtonIndex]);

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className="h-10 text-xl text-white-500 w-7"role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="h-10 text-gray-900 w-7 " role="button" onClick={() => setTheme('dark')} />
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
      <div className="flex justify-around mx-10">
        <div className="flex gap-1 text-xl font-bold cursor-pointer">
          <Link href="#home" scroll={false}>
            {" "}
            <h2 className="text-3xl">
              👩🏼‍💻 Klubinska
            </h2>
          </Link>
        </div>
        <div className={`flex items-center gap-5 font-semibold ${navbar ? "showMobileNav" : ""} `}>
          <button id="hamburger-btn" onClick={() => setNavbar(!navbar)} className={`flex items-center lg:hidden lg:${navbar===false}`}> {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30}/>}</button>
          {NAV_ITEMS.map((item) => {
            return (
              <Link
                scroll={false}
                onClick={() => {
                  setActiveButtonIndex(item.index);
                }}
                href={item.page}
                className={`hidden ${navbar? 'showList' : ''} lg:flex cursor-pointer before:hidden before:lg:absolute before:block before:w-full before:h-[3px] 
                before:bottom-0 before:left-0 before:bg-[#839788] 
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300 ${
                  activeButtonIndex === item.index
                    ? "after:absolute after:top-20 after:lg:hidden after:hidden after:block after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-[#839788] "
                    : ""
                }`}

              >
                {item.label}
              </Link>
            );
          })}
          {renderThemeChanger()}
        </div>
      </div>
      <hr id="navbar-hr" className="mt-5 bg-gray-100 mx-10 mb-[-20px] mx-10" />
      <style>{`
        .showMobileNav {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #F3F4F6;
          position: absolute;
          top:0;
          right: 0;
          z-index: 0;
          width: 100%;
          height: 50vh;
        } 
        .showList{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        @media only screen and (min-width: 1024px) {
          .showMobileNav{
            display: none;
          }
          .showList{
            background: black;
            display: flex;
          }
        }
        `}
      </style>
    </motion.div>
  );
};

export default Navbar;
