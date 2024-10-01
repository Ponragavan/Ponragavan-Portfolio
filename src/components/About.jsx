import React, { useState } from "react";

const About = () => {
  const [currentProfession, setCurrentProfession] = useState("commonDescription");

  const professionDescriptions = {
    "commonDescription":
      "I am a highly motivated and versatile individual, always eager to take on new challenges. With a strong passion for learning, I am dedicated to delivering high-quality results. My positive attitude and growth mindset drive me to make meaningful contributions and achieve great things.",
    "MERN Stack Developer":
      "As a MERN Stack Developer, I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. I enjoy creating scalable and efficient solutions for various web development projects.",
    "React Developer":
      "As a React Developer, I focus on developing interactive and responsive user interfaces using React.js. I have expertise in building single-page applications (SPAs) and integrating APIs to deliver seamless user experiences.",
    "UI/UX Designer":
      "As a UI/UX Designer, I am passionate about creating intuitive and visually appealing designs that enhance user interaction and experience. I specialize in user research, wireframing, prototyping, and ensuring designs meet both aesthetic and functional requirements.",
  };

  return (
    <section id="about" className="flex flex-col justify-center items-center gap-5 min-h-screen p-5 pt-20 bg-slate-900 bg-cover text-white text-center">
      <h2 className="text-4xl font-bold mb-5">About</h2>
      <p>
        Hi, I'm Ponragavan. I'm a student with a passion for creating new things.
      </p>
      <p className="w-1/2 max-[500px]:w-full">{professionDescriptions[currentProfession]}</p>

      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <button
          className={`px-4 py-2 mr-4 rounded ${
            currentProfession === "MERN Stack Developer"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:neon-gray"
          }`}
          onClick={() => setCurrentProfession("MERN Stack Developer")}
        >
          MERN Stack Developer
        </button>
        <button
          className={`px-4 py-2 mr-4 rounded ${
            currentProfession === "React Developer"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:neon-gray"
          }`}
          onClick={() => setCurrentProfession("React Developer")}
        >
          React Developer
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentProfession === "UI/UX Designer"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:neon-gray"
          }`}
          onClick={() => setCurrentProfession("UI/UX Designer")}
        >
          UI/UX Designer
        </button>
      </div>
    </section>
  );
};

export default About;
