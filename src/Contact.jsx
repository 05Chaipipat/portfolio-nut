import React from "react";
import LayoutComponent from "./LayoutComponent";

const Contact = () => {
  return (
    <div>
      <LayoutComponent
        topic={"Contact"}
        idcomponent={"Contact"}
        bgopacity={"bg-opacity-[30%]"}
      >
        <div>
          <section>
            <div className="contact-section-header">
              <h2>Let's work together...</h2>
            </div>
            <div className="flex justify-center items-center gap-5 flex-wrap md:gap-10">

              <button className="flex items-center rounded-lg px-2 py-1  bg-amber-400 md:w-[120px] justify-center w-1/3 hover:bg-red-500 hover:scale-[1.2] duration-150">
                <img className="w-[30px]" src="githubIcon.png" alt="git" />
              <a
                href="https://github.com/05Chaipipat"
                id="profile-link"
                target="_blank"
                className=""
              >
                Github
              </a>
              </button>

              <button className="flex items-center rounded-lg px-2 py-1  bg-amber-400 md:w-[120px] justify-center w-1/3 hover:bg-red-500 hover:scale-[1.2] duration-150">
                <img className="w-[30px]" src="linkedinIcon.png" alt="in" />
              <a
                href="http://www.linkedin.com/in/chaipipat-khemvaraporn"
                id="profile-link"
                target="_blank"
                className=""
              >
                Linkedin
              </a>
              </button>

              <button className="flex items-center rounded-lg px-2 py-1  bg-amber-400 md:w-[120px] justify-center w-1/3 h-[38px] hover:bg-red-500 hover:scale-[1.2] duration-150">
                <span className="material-symbols-outlined text-white">upload_file</span>
              <a
                href="https://docs.google.com/document/d/1CqP5obwibAUoL6cxGDfVxC4B2TJedWMZfGikZPlO140/edit?usp=sharing"
                id="profile-link"
                target="_blank"
                className=""
              >
                CV
              </a>
              </button>


            </div>
          </section>
        </div>
      </LayoutComponent>{" "}
    </div>
  );
};

export default Contact;
