import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive and modern personal portfolio built using React.js and Tailwind CSS. Showcases my projects, technical skills, and professional background with smooth UI interactions.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      github: "https://github.com/Jvd200/portfolio",
      live: "https://dayananda-portfolio.vercel.app", // <-- Your Vercel deployed link here
    },
    {
      title: "MERN Authentication System",
      description:
        "A secure login/signup and dashboard system built with JWT, bcrypt, React, Node.js, and MongoDB. Includes role-based authentication and protected routes.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bcrypt"],
      github: "https://github.com/Jvd200/mern-auth-fullstack",
      live: "https://mern-auth-fullstack.vercel.app",
    },
    {
      title: "Recipe Ideas",
      description:
        "A responsive recipe platform that allows users to search, edit, and view dynamic recipes fetched from an API using React and Tailwind CSS.",
      tech: ["React", "API", "Tailwind CSS"],
      github: "https://github.com/Jvd200/Recipe-Ideas",
      live: "",
    },
    {
      title: "Leave Management System",
      description:
        "A full-stack MERN web app to manage employee leave requests, authentication, admin dashboard, and CRUD operations for leaves.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/Jvd200",
      live: "https://leave-management-djv.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-black transition"
              >
                <FaGithub className="mr-2" /> Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="w-full border-t border-gray-200 mt-16 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Dayananda J V | Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default Projects;
