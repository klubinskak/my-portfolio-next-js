import Image from "next/image";
import React from "react";
import avatar from "../../../assets/avatar2.jpg";
import { AiFillFileText } from "react-icons/ai";
import Link from "next/link";
import {
  navVariants,
  slideIn,
  slideVariants,
  staggerContainer,
} from "../../../utils/motion";
import { motion } from "framer-motion";
import CustomText from "../Projects/CustomText";

function About() {
  return (
    <section className="p-5 h-[50vh]">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        viewport={{once: false}}
        transition={{ duration: 0.5 }}
        id="about"
        className="flex flex-col py-[30px] items-center justify-center"
      >
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <CustomText
          title="About me"
          textStyles="text-center text-3xl font-bold"
        />
      </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <div
          className="flex-row items-center justify-center md:flex gap-[50px] py-5"
        >
          <div
            className="flex items-center justify-center py-2"
          >
            <Image
              className="max-w-[220px] max-h-[220px] rounded-[20px]"
              src={avatar}
              alt="avatar-about"
            />
          </div>
          <div className="flex-col p-2">
            <p className="w-[380px] py-5 text-sm text-center">
              {" "}
              I am 24 y.o full stack developer. I got interested in web
              development and I try to expand my knowledge in this field. I am
              open mind person with a willingness to learn and develop.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="/resume/klaudiaklubinska.pdf"
                target="_blank"
                download
              >
                <button className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2">
                  <p>Download cv</p>
                  <AiFillFileText />
                </button>
              </Link>
            </div>
          </div>
          </div>
        </motion.div>
    </section>
  );
}

export default About;
