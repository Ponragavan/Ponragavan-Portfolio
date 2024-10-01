import React, { useState, useEffect } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Home = () => {
  const roles = [
    "MERN Stack Developer",
    "React Developer",
    "UI/UX Designer",
    "Programmer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen gap-6 p-5 pt-20 bg-gray-100 bg-cover"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <h2 className="text-6xl max-[500px]:text-3xl font-bold bg-gradient-to-b from-gray-700 via-gray-500 to-gray-300 text-transparent bg-clip-text">
        Hi, I am Ponragavan
      </h2>

      <div className="flex items-center text-lg text-white text-nowrap">
        I am a{" "}
        <p className="px-1 w-0 text-3xl max-[500px]:text-xl font-bold overflow-hidden border-r-2  text-purple-600 typing">
          {roles[currentRoleIndex]}
        </p>
      </div>
      <a
        href="Ponragavan-Resume.pdf"
        download="Ponragavan-Resume.pdf"
        className="px-10 py-3 font-semibold text-white rounded-full cursor-pointer bg-gradient-to-br from-purple-700 to-pink-600 hover:neon-purple"
      >
        Download CV
      </a>
      <div className="flex gap-4 mt-4 max-[500px]:gap-2">
        <h2 className="text-xl text-white">Follow me on :</h2>
        <a
          href="https://www.linkedin.com/in/ponragavan-m"
          target="_blank"
          className="text-blue-700"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://wa.me/+919787551260"
          target="_blank"
          className="text-green-500"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://www.instagram.com/web_wizard_dev/"
          target="_blank"
          className="text-pink-500"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/mpragavan.msdhoni/"
          target="_blank"
          className="text-blue-600"
        >
          <FaFacebook size={30} />
        </a>
      </div>
      <a className="mt-6 text-white" href="#about">
        <FaCircleChevronDown size={40} />
      </a>
    </section>
  );
};

export default Home;
