import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {SiBloglovin} from 'react-icons/si';
import { motion } from "framer-motion";
import { footerVariants, slideIn, staggerContainer } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.div 
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className='p-5 mx-10'>
        <hr />
        <div className="flex items-center justify-around w-full py-5 ">
            <p>&#169; 2023 Klaudia Klubinska</p>
            <div className='flex gap-2'>
               <Link href="https://github.com/klubinskak"><AiFillGithub size={30}/> </Link>
                <Link href="https://www.linkedin.com/in/klaudiaklubinska/"> <AiFillLinkedin size={32}/> </Link>
                <Link href="/blog"> <SiBloglovin size={30}/> </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer