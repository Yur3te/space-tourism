import React from "react";

import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="pt-10 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="h-16 ml-16" /></Link>
      <div className="absolute ml-56 z-10">
        <div className="h-0.5 bg-dark-gray w-4xl"></div>
      </div>

      <div className="flex justify-center p-4 bg-accent bg-opacity-15 backdrop-blur-md w-1/2 h-24 relative z-0">
        <div className="flex items-center space-x-16 text-white">
          <Link to="/">
            <div className="hover:underline"><b>00</b> HOME</div>
          </Link>
          <Link to="/destination">
            <div className="hover:underline"><b>01</b> DESTINATION</div>
          </Link>
          <Link to="/crew">
            <div className="hover:underline"><b>02</b> CREW</div>
          </Link>
          <Link to="/technology">
            <div className="hover:underline"><b>03</b> TECHNOLOGY</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
