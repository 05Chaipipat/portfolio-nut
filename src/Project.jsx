import React from "react";
import LayoutComponent from "./LayoutComponent";

const Project = () => {
  return (
    <LayoutComponent
      topic={"Project"}
      idcomponent={"Project"}
      bgopacity={"bg-opacity-[100%]"}
    >
      <div className=" flex flex-col lg:flex-row justify-between items-center mt-[2rem] ">
        <img
          src="Colmar-Academy.png"
          alt="image"
          loading="lazy"
          className=" lg:w-[50%] rounded-3xl"
        />
        <div className="  text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] ">
          <h2 className="text-[30px] pb-5 text-amber-400 font-bold">COLMAR ACADEMY</h2>
          <span>
            {" "}
            COLMAR ACADEMY was a significant milestone in my junior software developer journey. Through a Codecademy mini project, I created my first static website, showcasing my HTML and CSS proficiency.
          </span>
          <div className="p-3 flex items-center justify-center gap-20">
            <a
              href="https://05-nut-colmar-r0lo4me61-chaipipats-projects.vercel.app/"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150"
            >
              Link
            </a>
            <a
              href="https://github.com/05Chaipipat/05-nut-colmar"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between items-center mt-[2rem] ">
        <img
          src="homework_react.png"
          alt="image"
          loading="lazy"
          className=" lg:w-[50%] rounded-3xl"
        />
        <div className="  text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] ">
          <h2 className="text-[30px] pb-5 text-amber-400 font-bold">React Project</h2>
          <span>
            {" "}
            I built a React project using JavaScript and React hooks to send data to a backend database. The website allows administrators to create and delete data on the admin page, and users can view this data on the user page.
          </span>
          <div className="p-3 flex items-center justify-center gap-20">
            <a
              href="https://career-changer-react-assessment-plum.vercel.app/"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150"
            >
              Link
            </a>
            <a
              href="https://github.com/05Chaipipat/career-changer-react-assessment"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150" 
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between items-center mt-[2rem] ">
        <img
          src="Hifine.png"
          alt="image"
          loading="lazy"
          className=" lg:w-[50%] rounded-3xl"
        />
        <div className="  text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] ">
          <h2 className="text-[30px] pb-5 text-amber-400 font-bold">HiFine</h2>
          <span>
            {" "}
            Designed project “HiFine” web application is a social media like for exercises community. For tracking and sharing exercise data and photos with friends.
          </span>
          <div className="p-3 flex items-center justify-center gap-20">
            <a
              href="#"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150"
            >
              Link
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white bg-amber-400 rounded-lg px-10 py-2 hover:bg-lime-400 hover:scale-[1.2] duration-150"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Project;
