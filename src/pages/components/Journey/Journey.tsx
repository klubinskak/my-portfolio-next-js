import React from 'react'
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import Timeline from './Timeline';
import CustomText from "../Projects/CustomText";
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import styles from '@/styles';



const Journey = () => {
  return (
    <section id="skills" className={`${styles.paddings}`}>
      <div className="flex flex-col items-center space-y-6 justify-center" id="journey">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <CustomText
            title="My Personal Journey"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <div className="flex gap-[50px] py-5">
          <div className="flex items-center gap-2">
            <IoIosSchool />
            <p>Education</p>
          </div>
          <div className="flex items-center gap-2">
            <MdWork />
            <p>Experience</p>
          </div>
        </div>
        <Timeline />
      </div>
    </section>
  )
}

export default Journey