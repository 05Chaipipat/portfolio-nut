const LayoutComponent = ({children ,topic , idcomponent , bgopacity}) => {
    return (
      <section id={idcomponent} className={` bg-black ${bgopacity} scroll-mt-[2rem] py-[1rem] lg:p-[1rem]`}>
          <div className="w-[80%] mx-auto">
  
              {/* Topic */}
              <span className=" text-white text-[1.5rem]  font-semibold font-Incluesive-Sans lg:px-[0.7rem] py-[0.2rem] rounded-lg hover:bg-[#515a59af] hover:cursor-pointer">
                  #<span className="border-b-2 ">{topic}</span>
              </span>
  
              {/* Content */}
              {children}
          </div>
      </section>
    )
  }
  
  export default LayoutComponent