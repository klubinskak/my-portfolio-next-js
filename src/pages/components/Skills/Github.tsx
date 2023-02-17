import React from "react";
import Githubcalendar from "react-github-calendar";
import { AiFillGithub } from "react-icons/ai";

const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <div className="p-[30px] flex justify-content items-center flex-col text-3xl">
      <div className="py-[50px]">
        <p className="font-bold"> Days I code </p>
        <div className="flex flex-col items-center justify-center text-center">
          <a
            target="_blank"
            href="https://github.com/klubinskak?tab=repositories"
          >
            <AiFillGithub className="transition-transform cursor-pointer hover:translate-y-1" />
          </a>
        </div>
      </div>
      <Githubcalendar
        username="klubinskak"
        blockSize={15}
        blockMargin={5}
        // theme={colourTheme}
        fontSize={16}
      />
    </div>
  );
};

export default Github;
