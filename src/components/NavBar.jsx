import React, { useState, useEffect } from "react";
import { FaAffiliatetheme } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex text-white p-5 items-center max-[500px]:justify-between justify-around z-20 ${
        isScrolled ? "py-3 bg-black transition duration-300 ease-in-out" : ""
      }`}
    >
      <a className="flex gap-3 items-center cursor-pointer" href="#home">
        <FaAffiliatetheme size={30} />
        <h1 className="text-3xl font-semibold max-sm:text-lg">Portfolio</h1>
      </a>
      <div className="hidden md:flex list-none space-x-10 text-slate-200 text-lg">
        <li className="cursor-pointer hover:text-white">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#skills">Skills</a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </div>
      <a
        href="https://github.com/Ponragavan/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-lg sm:text-base text-black rounded-full cursor-pointer bg-amber-500 hover:neon-amber"
      >
        <FaGithub />
        Github <span className="hidden sm:inline">Profile</span>
      </a>
      <button className="md:hidden z-10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <MdClose size={30} className="cursor-pointer" />
        ) : (
          <MdMenu size={30} className="cursor-pointer" />
        )}
      </button>
      {isOpen && (
        <div className="absolute md:hidden list-none space-y-5 text-slate-200 bg-opacity-95 bg-black py-10 px-20 text-lg top-0 right-0 rounded-lg toggle-animation">
          <li className="animated mt-5" onClick={() => setIsOpen(!isOpen)}>
            <a href="#home">Home</a>
          </li>
          <li className="animated" onClick={() => setIsOpen(!isOpen)}>
            <a href="#about">About</a>
          </li>
          <li className="animated" onClick={() => setIsOpen(!isOpen)}>
            <a href="#skills">Skills</a>
          </li>
          <li className="animated" onClick={() => setIsOpen(!isOpen)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="animated" onClick={() => setIsOpen(!isOpen)}>
            <a href="#contact">Contact</a>
          </li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
