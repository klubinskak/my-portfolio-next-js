import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import CustomText from "./CustomText";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import fitnessApp from '../../../assets/projects/fitness-app-preview.png';
import recipe_flutter_app from '../../../assets/projects/recipe_flutter_app.png';

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
    name: "Website for sushi restaurant with blog feature",
    image: '/sushi.png',
    desc: "Full Stack application for display information about sushi restaurant with blog feature. Created with NextJS, Sanity.io and TailwindCSS.🍱",
    skills: "ReactTS, NextJS, TailwindCSS",
    github: "https://github.com/klubinskak/sushi-website-restaurant-nextjs/tree/main",
    website: "https://sushi-website-restaurant-nextjs.vercel.app/",
  },
    {
    index: 3,
    name: "Fitness App",
    desc: "Gym, food and news tracker application, allows to search for workout & recipes, add user workout and authentication of a user 🏋🏼",
    image:
      fitnessApp,
    skills: "React Native, Firebase, TailwindCSS",
    github: "https://github.com/klubinskak/gym-react-native-app",
    website: "/",
  },
  {
    index: 4,
    name: "Recipes Flutter App",
    image: recipe_flutter_app,
    desc: "Recipes application, allows to search and with user authentication 🥘",
    skills: "React JS, Ant.Design, API",
    github: "https://github.com/klubinskak/recipes-flutter-app",
    website: "/",
  },
  {
    index: 5,
    name: "Disney+ Clone",
    desc: "Disney+ Clone build with React, Typescript, NextJS, Tailwind CSS & Upstash. 🦄",
    image:
      "https://user-images.githubusercontent.com/76222513/201928068-fe89eab8-864b-4ab6-9aef-d0300709e049.png",
    skills: "NextJS, TailwindCSS, Upstash, Typescript",
    github: "https://github.com/klubinskak/disney-plus-clone",
    website: "https://disneyplusclone2.netlify.app",
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
