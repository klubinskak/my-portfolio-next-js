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
    <div id="container-contact" className="w-[250px] h-[150px] border-gray-100 pt-8 space-y-3 border-2 rounded-2xl flex-col justify-between items-center text-center">
      <Link href={link ?? ""} className="flex items-center justify-center text-center">
        {icon}
      </Link>
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
};

export default Container;
