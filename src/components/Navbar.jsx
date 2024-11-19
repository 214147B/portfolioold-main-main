import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-between gap-4">
        <a href="https://www.linkedin.com/in/savinduneth/">
          <FaLinkedin className="text-4xl mx-2" />
        </a>
        <a href="https://github.com/nethsarabas">
          <FaGithub className="text-4xl mx-2" />
        </a>
        <a href="https://x.com/SavinduNethsara">
          <FaTwitter className="text-4xl mx-2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
