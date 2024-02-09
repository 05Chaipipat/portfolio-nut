import LayoutComponent from "./LayoutComponent";


const About = () => {
    return (
      <LayoutComponent
        topic={"About"}
        idcomponent={"About"}
        bgopacity={"bg-opacity-[100%]"}
      >
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-[2rem] ">
          <div className="  text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] ">
            <p>
              <span className="pl-[1rem]"> I recently graduated from Generation Junior Software Developer
              Bootcamp, specializing in Front-end and Back-end website
              development. Proficient in HTML, CSS, JavaScript, and Git, I bring
              adaptability, a commitment to teamwork, and a growth mindset. I am
              well-equipped to contribute effectively to software development
              projects.
              </span>
            </p>
         
          </div>
          <img src="https://green.in.th/wp-content/uploads/2019/02/%E0%B8%9F%E0%B8%A3%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B8%99%E0%B8%8B%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg" alt="" className=" lg:w-[50%] rounded-3xl" />
        </div>
      </LayoutComponent>
    );
  };
  
  export default About;