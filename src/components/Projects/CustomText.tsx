import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const CustomText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => {
  return (
    <motion.p
      variants={textContainer}
      className={`text-secondary-white ${textStyles}`}
    >
      {title?.split("").map((character, index) => (
        <motion.span variants={textVariant2} key={index}>
          {character}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default CustomText;
