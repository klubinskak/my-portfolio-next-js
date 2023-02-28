import { textContainer, textVariant2 } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

const CustomText = ({title, textStyles}) => {

  return (
    <motion.p
    variants={textContainer}
    className={`text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter:any, index:any) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
  )
}

export default CustomText