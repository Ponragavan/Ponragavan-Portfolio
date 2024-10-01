import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-10 pb-1 bg-black text-slate-300">
      <div className="flex flex-wrap justify-between items-center max-[500px]:items-start">
        <div className="flex flex-col gap-3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="list-none">
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
          </ul>
        </div>

        <div className="flex flex-col gap-3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white">Contact Info</h2>
          <p>
            <span className="font-semibold">Email : </span>
            mpragavan0209@gmail.com
          </p>
          <p>Phone : (+91) 97875 51260</p>
          <p>Address : Alangulam, Tenkasi, TamilNadu - 627808</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white">Follow Me</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ponragavan/"
              target="_blank"
              className="text-2xl hover:text-slate-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ponragavan-m"
              target="_blank"
              className="text-2xl hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/web_wizard_dev/"
              target="_blank"
              className="text-2xl hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+919787551260"
              target="_blank"
              className="text-2xl hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-5 text-lg font-bold text-center">&#169; Ponragavan</p>
    </footer>
  );
};

export default Footer;
