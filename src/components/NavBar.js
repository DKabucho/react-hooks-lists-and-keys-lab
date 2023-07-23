import React from "react";
import Home from "./Home";
import About from "./About"


function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
  <div>
  <a href="#home">home</a>
  <a href="#about">about</a>
  <a href="#projects">projects</a>
  </div>
  }</nav>;
}

export default NavBar;
