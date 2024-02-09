import { HiMenu } from "react-icons/hi";
import React, {useState} from "react";


const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-black p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Chaipipat</div>
        <div className="md:hidden">
        <HiMenu className=" text-[1.5rem] text-white "onClick={toggleMenu}/>
        </div>
        
        <ul className="hidden md:flex space-x-10  text-[1.2rem]">
          <li><a href="#" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Home</a></li>
          <li><a href="#About" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">About</a></li>
          <li><a href="#Project" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Project</a></li>
          <li><a href="#Contact" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Contact</a></li>
        </ul>
      </div>

{/* Mobile menu */}
{isMenuOpen ? 
(<ul className="flex-col md:hidden sticky top-0 z-10 space-y-2">
          <li><a href="#" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Home</a></li>
          <li><a href="#About" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">About</a></li>
          <li><a href="#Project" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Project</a></li>
          <li><a href="#Contact" className="text-white hover:text-amber-400 transition border-b-2 border-slate-900 hover:border-amber-400 cursor-pointer">Contact</a></li>
        </ul>
        ) : null}
    </nav>
  )
 
}

export default NavbarComponent