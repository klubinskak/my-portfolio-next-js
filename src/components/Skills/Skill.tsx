import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { NextPage } from "next";


interface Props {
  title: string,
  subtitle: string,
  image: StaticImageData,
}

const Skill: NextPage<Props> = (props) => {
  const { image, title, subtitle } = props;
  return (
    <div id="skill-container" className="border-4 bg-gray-100 text-black border-gray-100 rounded-[20px] h-[150px] p-2 flex flex-col text-center justify-center items-center">
      <Image className="max-w-[30px] md:max-w-[50px]" loading='lazy' src={image} alt="technology" />
      <p className="mt-2 text-xs font-bold">{title}</p>
      <p className="text-xs">{subtitle}</p>
    </div>
  )
}

export default Skill