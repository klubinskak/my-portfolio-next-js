import React from 'react';
import { NextPage } from "next";

interface Props {
    title: string,
    subtitle: string,
    icon: JSX.Element,
}

const Tile: NextPage<Props> = (props) => {
const {title, subtitle, icon} = props;
  return (
    <div className='w-[110px] h-[90px] border-2 rounded-[15px] border-gray-200 text-xs flex flex-col justify-center items-center'>
        <span className="text-xl my-2">{icon}</span>
        <p>{title}</p>
        <p className="text-gray-400 text-[10px]">{subtitle}</p>
    </div>
  )
}

export default Tile