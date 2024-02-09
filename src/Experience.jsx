import React from "react";
import ExperienceLayout from "./ExportLayout";
import LayoutComponent from "./LayoutComponent";


const Experience = () => {
  return (
 
       <LayoutComponent topic={'Experience'} idcomponent={'experience'} bgopacity={'bg-opacity-[100%]'}>

      <ExperienceLayout
        topic1={"The Generation (Thailand) and KX Knowledge KMUTT"}
        topic2={"Junior Software Developer Programme Cohort 6"}
        durationtime={"November 2023 - February 2024 "}
        addresslearn={"Online , Thailand"}
      >
        <p>
          - Learned how to build websites using the MERN stack, React for
          front-end development, Node.js for backend,and MongoDB for database
          management.
        </p>
        <p>
          - Introduction to Bootstrap and tailwind for responsive web design.
        </p>
        <p>
          - Proven skills in crisis management, problem-solving, and orientation
          to details, communication and teamwork.
        </p>
      </ExperienceLayout>
 
      <ExperienceLayout
        topic1={"Thai Wah Public Company (TWPC)"}
        topic2={"Quality Assurance & Quality Control Officer"}
        durationtime={"2017-2022"}
        addresslearn={"Nakhon Pathom , Thailand"}
      >
        <p>- Meeting Coordination and Documentation</p>
        <p>
          - Assume responsibility for receiving and attending to customers
          visiting the factory. Address customer inquiries with professionalism.
        </p>
        <p>
          - Product Sample Analysis and Process Enhancement - Understand the
          factory layout for optimal workflows. 
        </p>
        <p>
          - Problem Resolution: Proactively identify and resolve issues that may
          arise during various events or in day-to-day operations.
        </p>
      </ExperienceLayout>
     
      </LayoutComponent>

    
  );
};

export default Experience;
