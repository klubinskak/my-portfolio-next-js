import React from 'react'
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import Timeline from './Timeline';



const Journey = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="journey">
        <p className='text-3xl font-bold'>My Personal Journey</p>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded"/>
        <div className="flex gap-[50px] py-5">
            <div className="flex items-center gap-2">
            <IoIosSchool/>
            <p>Education</p>
            </div>
            <div className="flex items-center gap-2">
            <MdWork/>
            <p>Experience</p>
            </div>
        </div>
        <Timeline/>
    </div>
  )
}

export default Journey