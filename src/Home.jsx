import React from "react";

const Home = () => {
  return (
    <>
    <div className="flex justify-center items-center flex-col w-full h-full py-[100px] bg-black">
      <img
        className="w-[300px] h-[300px] rounded-full"
        src="profile.nut.jpg"
        alt="profile"
      />
      
      <h1 className="text-amber-400 font-bold text-4xl">Software-Developer</h1>
      <p className="text-white lg:text-[1rem] pl-5 text-opacity-80  mt-[2rem] lg:w-[40%]">
        Hi, I am <span className="text-amber-400">"Nut"</span> or <span className="text-amber-400">"Chaipipat Khemvaraporn"</span> <br /> Junior Software
        Developer bootscamp cohort6 at Generation Thailand. 
        <p> I'm a fullstack developer.</p>
      </p>
    </div>
  
   </>
  );
};

export default Home;
