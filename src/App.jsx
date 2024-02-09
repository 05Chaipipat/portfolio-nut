import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Skill from "./Skill";
import Experience from "./Experience";
import Education from "./Education";



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Experience/>
      <Education/>
      <Skill/>
      <Project/>
      <Contact/>
    
    </div>
  );
}

export default App;
