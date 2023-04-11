import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import cryptoapp from "../../../assets/projects/cryptocurrencyApp.png";
import CustomText from "./CustomText";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";

const projectList = [
  {
    index: 1,
    name: "E-commerce Website",
    image: '/ecommerce-mern.png',
    desc: "Full Stack Ecommerce Website build with React, Node.js, MongoDB & Express. 🛍️",
    skills: "React, Node.js, MongoDB, Express",
    github: "https://github.com/klubinskak/ecommerce-react-mern",
    website: "/",
  },
  {
    index: 2,
    name: "Landing page sushi restaurant",
    image: '/sushi.png',
    desc: "Landing page for sushi restaurant. 🍱",
    skills: "ReactTS, NextJS, TailwindCSS",
    github: "https://github.com/klubinskak/sushi-website-restaurant-nextjs/tree/main",
    website: "https://sushi-website-restaurant-nextjs.vercel.app/",
  },
  {
    index: 3,
    name: "Cryptocurrency App",
    image: cryptoapp,
    desc: "Front end application build with React JS, Ant.Design & API. 🤑",
    skills: "React JS, Ant.Design, API",
    github: "https://github.com/klubinskak/cryptocurrency-app",
    website: "/",
  },
  {
    index: 4,
    name: "Disney+ Clone",
    desc: "Disney+ Clone build with React, Typescript, NextJS, Tailwind CSS & Upstash. 🦄",
    image:
      "https://user-images.githubusercontent.com/76222513/201928068-fe89eab8-864b-4ab6-9aef-d0300709e049.png",
    skills: "NextJS, TailwindCSS, Upstash, Typescript",
    github: "https://github.com/klubinskak/disney-plus-clone",
    website: "https://disneyplusclone2.netlify.app",
  },
  {
    index: 5,
    name: "Messenger Clone",
    desc: "Messenger clone build with React, NextJS, Hygraph, Tailwind CSS & GraphQL. 💬 ",
    image:
      "https://user-images.githubusercontent.com/76222513/211889223-9f29967d-6736-48ec-84b1-eceb8b877b5f.png",
    skills: "NextJS, Hygraph, TailwindCSS, GraphQL",
    github: "https://github.com/klubinskak/messenger-2.0",
    website: "/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddings}`}
    >
      <div
        className="flex flex-col items-center justify-center py-[150px] w-full h-full text-center"
      >
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <CustomText
            title="Projects"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <motion.div
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" gap-[20px] animate-slideUpCubiBezier w-[70%] h-full mt-5 animation-delay-2"
        >
          {projectList.map((item) => {
            return (
              <Project
                key={item.index}
                name={item.name}
                description={item.desc}
                image={item.image}
                github={item.github}
                website={item.website}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
