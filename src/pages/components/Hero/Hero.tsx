import React from "react";
import { TbSend } from "react-icons/tb";
import Image from "next/image";
import { Link } from "react-scroll";
import avatar from "../../../assets/avatar3.jpg";
import Type from "./Type";


const Hero = () => {
  return (
    <section
      id="home" className="w-full h-[100vh] py-10 items-center justify-center md:p-0 text-center lg:gap-5 gap-5 md:flex">
      {" "}
      <div className="flex flex-col items-center justify-center space-y-10 md:space-y-3">
        <div className="flex gap-2 text-4xl">
          <Type />
        </div>
        <div className="flex items-center gap-2 font-bold text-center">
          <hr className="w-[70px]" />
          <p id="job-title" className="text-xs text-black">Software Developer</p>
          <hr className="w-[70px]" />
        </div>
        <p className="text-sm font-normal md:w-[450px] text-center w-[300px] ">
          A passionate Software Developer having an experience of building Web
          applications with <span className="font-bold">Typescript / React / Angular / C# / Node.js / ASP.NET / MongoDB / MSSQL / TailwindCSS / PrimeNG </span> and some
          other cool libraries and frameworks.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <button data-testid="contact-me" className="flex items-center justify-center gap-2 p-2 px-4 py-2 text-xs text-white duration-300 bg-black rounded hover:opacity-80 group" aria-label="Contact Me">
            <p>Contact Me</p>
            <TbSend className="group-hover:rotate-45" />
          </button>
        </Link>
      </div>
      <div
        className="relative w-[400px] h-[380px] rounded-md mx-auto my-5 md:mx-10">
        <Image
          src={avatar}
          loading="lazy"
          alt="avatar-home"
          fill
          className="rounded-[50%] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
