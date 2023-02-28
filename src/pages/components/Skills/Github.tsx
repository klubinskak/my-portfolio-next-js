import React from "react";
import Githubcalendar from "react-github-calendar";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Github = () => {
  return (
    <div className="p-[30px] flex justify-content items-center flex-col text-3xl h-[85vh]">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        viewport={{ once: false }}
        whileInView={{ y: [-150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-[50px]"
      >
        <p className="font-bold"> Days I code </p>
        <div className="flex flex-col items-center justify-center text-center">
          <a
            target="_blank"
            href="https://github.com/klubinskak?tab=repositories"
          >
            <AiFillGithub className="transition-transform cursor-pointer hover:translate-y-1" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        viewport={{once: false}}
        transition={{ duration: 0.5 }}>
        <Githubcalendar
          username="klubinskak"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </motion.div>
    </div>
  );
};

export default Github;
