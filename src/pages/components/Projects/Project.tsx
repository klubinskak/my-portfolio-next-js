import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface Props {
  name: string;
  description: string;
  image: string | StaticImageData;
  github: string;
  website: string;
}

const Project: NextPage<Props> = (props) => {
  const { name, description, image, github, website } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 p-10 px-8 lg:flex-row">
          <Image
            className="object-cover max-h-[400px] max-w-[100%] h-[250px] md:h-[300px] rounded-2xl overflow-hidden lg:max-w-[60%] mt-5 transform hover:scale-105 duration-500 ease-in-out"
            src={image}
            alt="project"
            width={1000}
            height={400}
          />
      <div className="flex-1">
        <h1 className="p-2 text-xl font-bold text-center text-black">{name}</h1>
        <h3>{description}</h3>
        <div className="flex flex-row items-center justify-center gap-4 p-2 mt-2 text-center">
          <Link href={github || ""} target="_blank">
            <BsGithub
              size={25}
              className="transition transition-transform cursor-pointer hover:translate-y-[-5px]"
            />
          </Link>
          <Link href={website || ""}>
            <BsArrowUpRightSquare
              size={25}
              className="transition transition-transform cursor-pointer duration-150 delay-150  hover:translate-y-[-5px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
