import React from "react";
import SkillItem from "./SkillItem.jsx";


const Skill = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-200 pt-4">
      <h1 className="text-black text-4xl font-bold">SKILLS</h1>
      <div className="flex p-8 flex-wrap justify-center gap-7 my-auto">
        <SkillItem Path="react.svg" Link="#" Alt="react" />
        <SkillItem Path="javascript.svg" Link="#" Alt="Javascript" />
        <SkillItem Path="html5.svg" Link="#" Alt="HTML5" />
        <SkillItem Path="css3.svg" Link="#" Alt="CSS3" />
        <SkillItem Path="mongodb.svg" Link="#" Alt="MongoDB" />
        <SkillItem Path="express-light.svg" Link="#" Alt="ExpressJS" />
        <SkillItem Path="node-js.svg" Link="#" Alt="NodeJS" />
        <SkillItem Path="tailwind.svg" Link="#" Alt="Tailwind CSS" />
        <SkillItem Path="sqlite.svg" Link="#" Alt="SQLite" />
        <SkillItem Path="Bootstrap.png" Link="#" Alt="Bootstrap" />
      </div>
    </div>
  );
};

export default Skill;