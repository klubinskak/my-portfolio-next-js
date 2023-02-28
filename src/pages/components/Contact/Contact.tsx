import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import Container from "./Container";
import { motion } from "framer-motion";
import CustomText from "../Projects/CustomText";
import { staggerContainer } from "@/utils/motion";

const Contact = () => {
  return (
    <section id="contact py-[50px]">
      <div className="flex flex-col items-center w-full" id="contact">
        <motion.div
          variants={staggerContainer(0.5, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <CustomText
            title="Contact Me"
            textStyles="text-center pb-2 text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto bg-[#839788] border-0 rounded" />
        <div className="md:flex items-center justify-center py-12 md:space-x-[150px]">
          <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
           viewport={{once: false, amount: 0.25}}
          className="flex flex-col items-center justify-center space-y-4">
            <Container
              title="Email"
              link="mailto:klubinskaklaudia@gmail.com"
              icon={<MdEmail size={32} />}
            />
            <Container
              title="Linkedin"
              link="https://www.linkedin.com/in/klaudiaklubinska/"
              icon={<AiFillLinkedin size={32} />}
            />
            <Container
              title="Github"
              link="https://github.com/klubinskak?tab=repositories"
              icon={<BsGithub size={29} />}
            />
          </motion.div>
          <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-2">
            <p className="py-2 mt-10 font-bold md:mt-0">Send me a message </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
