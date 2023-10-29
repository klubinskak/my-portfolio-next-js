import React from "react";
import Skill from "./Skill";
import javascript from "../../../assets/technology/javascript.png";
import typescript from "../../../assets/technology/typescript.png";
import react from "../../../assets/technology/react.png";
import node from "../../../assets/technology/node.png";
import html from "../../../assets/technology/html.png";
import css from "../../../assets/technology/css.png";
import git from "../../../assets/technology/git.png";
import materialui from "../../../assets/technology/materialui.png";
import tailwindcss from "../../../assets/technology/tailwind.png";
import mongo from "../../../assets/technology/mongo.png";
import firebase from "../../../assets/technology/firebase.png";
import csharp from "../../../assets/technology/csharp.svg";
import dotnet from '../../../assets/technology/NET_Core_Logo.svg';
import angular from "../../../assets/technology/angular.png";
import sharepoint from "../../../assets/technology/sharepoint.png";
import python from "../../../assets/technology/python.png";
import powerautomate from "../../../assets/technology/powerautomate.webp";
import Github from "./Github";
import CustomText from "../Projects/CustomText";
import styles from "@/styles";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

function Skills() {
  return (
    <section id="skills" className={`${styles.paddings}`}>
      <div
        className="flex flex-col justify-center items-center p-5 mt-5 py-[30px]"
      >
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <CustomText
            title="Skills"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <motion.div
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-5">
            <Skill
              title="JavaScript"
              subtitle="Application Development"
              image={javascript}
            />
            <Skill
              title="Typescript"
              subtitle="Application Development"
              image={typescript}
            />
            <Skill title="React" subtitle="Front-end development" image={react} />
            <Skill title="Node" subtitle="Back-end development" image={node} />
            <Skill title=".NET" subtitle="Back-end development" image={dotnet} />
          </div>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
            <Skill title="HTML 5" subtitle="Structural Design" image={html} />
            <Skill title="CSS 3" subtitle="Style Design" image={css} />
            <Skill title="GIT" subtitle="Version control system" image={git} />
            <Skill
              title="Material UI"
              subtitle="Style Design"
              image={materialui}
            />
            <Skill
              title="TailwindCSS"
              subtitle="Style Design"
              image={tailwindcss}
            />
            <Skill title="MongoDB" subtitle="Database" image={mongo} />
            <Skill title="Firebase" subtitle="Database" image={firebase} />
            <Skill
              title="React Native"
              subtitle="Mobile Development"
              image={react}
            />
            <Skill title="C#" subtitle="Software Development" image={csharp} />
            <Skill
              title="Python"
              subtitle="Front-end Development"
              image={python}
            />
                        <Skill
              title="Angular"
              subtitle="Software Development"
              image={angular}
            />
                                    <Skill
              title="Sharepoint Framework"
              subtitle="Software Development"
              image={sharepoint}
            />
                                                <Skill
              title="Power Automate"
              subtitle="Software Development"
              image={powerautomate}
            />
          </div>
        </motion.div>
      </div>
      <Github />
    </section>
  );
}

export default Skills;
