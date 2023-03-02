import React from "react";
import { TbSend } from "react-icons/tb";
import Image from "next/image";
import { Link } from "react-scroll";
import avatar from "../../../assets/avatar3.jpg";
import Type from "./Type";
import { navVariants, slideIn } from '../../../utils/motion';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    id="home" className="w-full h-full items-center justify-center h-[100vh] py-10 md:p-0 text-center lg:gap-10 md:flex">
      {" "}
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <div className="flex gap-2 text-4xl">
          <Type />
        </div>
        <div className="flex items-center gap-2 font-bold text-center">
          <hr className="w-[70px]" />
          <p id="job-title" className="text-xs text-black">Software Engineer</p>
          <hr className="w-[70px]" />
        </div>
        <p className="text-sm font-normal md:w-[450px] text-center w-[300px] ">
          A passionate Software Engineer having an experience of building Web
          applications with JavaScript / React / Nodejs / MongoDB / TailwindCSS and some
          other cool libraries and frameworks.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <button data-testid="contact-me" className="flex items-center justify-center gap-2 p-2 px-4 py-2 text-xs text-white duration-300 bg-black rounded hover:opacity-80 group">
            <p>Contact Me</p>
            <TbSend className="group-hover:rotate-45" />
          </button>
        </Link>
      </div>
      <div 
      className="flex items-center justify-center">
        <Image
          src={avatar}
          alt="avatar-home"
          className="max-w-[280px] lg:max-w-[350px] text-center md:my-5 my-10 max-h-[280px] lg:max-h-[350px] object-cover rounded-[50%]"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
