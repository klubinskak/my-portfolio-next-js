import Image from 'next/image'
import React from 'react'
import avatar from '../../../assets/avatar2.jpg';
import { AiFillFileText } from "react-icons/ai";
import Link from 'next/link';

function About() {
  return (
    <div id="about" className="flex flex-col py-[30px] items-center justify-center">
      <p className='text-3xl font-bold'>About me</p>
      <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded"/>
      <div className="flex-row items-center justify-center md:flex gap-[50px] py-5">
          <div className="flex items-center justify-center py-2">
            <Image className='max-w-[220px] max-h-[220px] rounded-[20px]' src={avatar} alt="avatar-about"/>
          </div>
        <div className='flex-col p-2'>
        {/* <div className="flex gap-[50px]">
          <Tile title="Experience" subtitle="1+ years" icon={<FaAward/>}/>
          <Tile title="Completed" subtitle="10 + projects" icon={<BsCloudCheckFill/>}/>
          <Tile title="Supports" subtitle="Online 24/7" icon={<BiSupport/>}/>
        </div> */}
        <p className="w-[380px] py-5 text-sm text-center"> I am 24 y.o full stack developer. I got interested in web development and I try to expand my knowledge in this field. I am open mind person with a willingness to learn and develop.</p>
        <div className="flex items-center justify-center">
          <Link href='/resume/klaudiaklubinska.pdf' target="_blank" download>
          <button className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2">
            <p>Download cv</p>
            <AiFillFileText/>
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About