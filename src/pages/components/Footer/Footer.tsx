import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiBloglovin } from 'react-icons/si';

const Footer = () => {
  return (
    <div
      className='p-5 mx-10'>
      <hr />
      <div className="flex items-center justify-around w-full py-5 ">
        <p className='text-xs'>&#169; 2024 Klaudia Klubinska</p>
        <div className='flex gap-2'>
          <Link href="https://github.com/klubinskak"><AiFillGithub size={30} /> </Link>
          <Link href="https://www.linkedin.com/in/klaudiaklubinska/"> <AiFillLinkedin size={32} /> </Link>
          <Link href="https://www.klaudiadev.com/"> <SiBloglovin size={30} /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer