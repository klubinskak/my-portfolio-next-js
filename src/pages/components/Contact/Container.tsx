import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link: string;
  icon: JSX.Element;
}

const Container: NextPage<Props> = (props) => {
  const { title, link, icon } = props;
  return (
    <div id="container-contact" className="w-[250px] h-[150px] border-gray-100  space-y-3 border-2 rounded-2xl flex-col justify-center items-center text-center">
      <Link href={link ?? ""} className="font-bold space-x-2 hover:text-blue-400 transition duration-300 flex w-full h-full items-center gap-3 justify-center text-center">
        {icon} {title}
      </Link>
    </div>
  );
};

export default Container;
