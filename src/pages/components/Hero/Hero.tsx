import React from "react";
import { TbSend } from "react-icons/tb";
import Image from "next/image";
import { Link } from "react-scroll";
import avatar from "../../../assets/avatar3.jpg";
import Type from "./Type";

const Hero = () => {
  return (
    <div id="/" className="items-center justify-center py-10 space-x-5 text-center lg:gap-10 md:flex">
      {" "}
      <div className="flex flex-col items-center justify-center space-y-2 ">
        <div className="flex gap-2 text-4xl">
          <Type />
        </div>
        <div className="flex items-center gap-2 font-bold text-center">
          <hr className="w-[70px]" />
          <p className="text-xs text-black">Software Engineer</p>
          <hr className="w-[70px]" />
        </div>
        <p className="text-sm font-normal w-[450px] text-center">
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
          <button className="flex items-center justify-center gap-2 p-2 px-4 py-2 text-xs text-white duration-300 bg-black rounded hover:opacity-80 group">
            <p>Contact Me</p>
            <TbSend className="group-hover:rotate-45" />
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        {/* <div className="rounded bg-gray-200 w-[31vw] h-[51vh] flex items-center justify-center"> */}
        <Image
          src={avatar}
          alt="avatar-home"
          className="max-w-[400px] text-center my-5 max-h-[400px] object-cover rounded-[50%]"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
