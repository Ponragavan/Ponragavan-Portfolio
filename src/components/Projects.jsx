import { TbCircleArrowRightFilled } from "react-icons/tb"; 
import React from "react";

const projects = [
  {
    name: "Tic Tac Toe Game",
    description: "A simple Tic Tac Toe game implemented using React JS.",
    github: "https://github.com/Ponragavan/Tic-Tac-Toe",
    image: "tic-tac-toe.png",
  },
  {
    name: "Flappy Bird Game",
    description:
      "A clone of the Flappy Bird game using React JS and Tailwind CSS.",
    github: "https://github.com/Ponragavan/Flappy-Bird",
    image: "flappy.png",
  },
  {
    name: "Todo List",
    description: "A todo list application to keep track of tasks.",
    github: "https://github.com/Ponragavan/Todo-list",
    image: "todo-list.png",
  },
  {
    name: "Project Management",
    description: "An application to manage projects and tasks.",
    github:
      "https://github.com/Ponragavan/React-Projects/tree/main/Project-Management",
    image: "project-management.png",
  },
  {
    name: "Programming Chatbot",
    description: "A chatbot that helps with programming queries.",
    github: "https://github.com/Ponragavan/Programming-ChatBot",
    image: "programming-chatbot.png",
  },
  {
    name: "Weather App",
    description: "An app to display weather information for various locations.",
    github: "https://github.com/Ponragavan/Live-Location-and-weather",
    image: "weather-app.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen p-5 pt-20 pb-10 text-white text-center"
      style={{backgroundImage: 'url("projects.png")'}}
    >
      <h2 className="text-4xl font-bold mb-5">Projects</h2>
      <p className="mb-5">Here are some of the projects I've worked on:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative shadow-lg rounded-lg cursor-pointer bg-cover bg-center h-64 flex flex-col justify-center items-center neon-slate hover:neon-purple`}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
            onClick={() => window.open(project.github, "_blank")}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-80 max-sm:opacity-70 rounded-lg"></div>
            <h3 className="text-2xl font-semibold z-10 relative text-black group-hover:text-purple-700 max-sm:text-purple-500">
              {project.name}
            </h3>
            <p className="mt-3 text-sm opacity-0 group-hover:opacity-100 max-sm:hidden transition-opacity duration-300 z-10 relative">
              {project.description}
            </p>
            <p className="mt-3 text-sm text-white text-center transition-opacity sm:hidden duration-300 z-10">
              {project.description} <span className="absolute text-red-500 right-1/2 top-3/4"><TbCircleArrowRightFilled size={25} /></span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
