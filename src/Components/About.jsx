import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiPostman, SiVercel, SiJirasoftware, SiTrello } from "react-icons/si";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        About Me
      </h1>

      {/* Education Section */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Education</h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          <strong>B.E. in Computer Science Engineering</strong> — Dayananda
          Sagar Academy of Technology and Management (2020–2024). Graduated with
          a strong foundation in software engineering, MERN stack development,
          and web technologies.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-gray-700 justify-items-center">
          {/* React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl hover:text-blue-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">React.js</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl hover:text-green-600 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">Node.js</p>
          </div>

          {/* Express */}
          <div className="flex flex-col items-center">
            <SiExpress className="text-5xl hover:text-gray-800 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Express.js
            </p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <SiMongodb className="text-5xl hover:text-green-700 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">MongoDB</p>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl hover:text-blue-600 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">MySQL</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-5xl hover:text-yellow-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              JavaScript
            </p>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl hover:text-orange-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">HTML5</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl hover:text-blue-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">CSS3</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl hover:text-sky-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Tailwind CSS
            </p>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-5xl hover:text-red-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Git & GitHub
            </p>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700 justify-items-center">
          <div className="flex flex-col items-center">
            <FaComments className="text-4xl hover:text-blue-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Communication
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaLightbulb className="text-4xl hover:text-yellow-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Problem Solving
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl hover:text-green-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">Teamwork</p>
          </div>

          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-4xl hover:text-purple-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Adaptability
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaClock className="text-4xl hover:text-red-500 transition" />
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Time Management
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Experience
        </h2>

        {/* Formonex Pvt. Ltd */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800">
            Formonex Pvt. Ltd — MERN Stack Developer
          </h3>
          <p className="text-gray-600 text-sm">(Jun 2025 – Present)</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>
              Developed and optimized RESTful APIs using Node.js and Express.
            </li>
            <li>Implemented JWT authentication for secure user access.</li>
            <li>
              Improved API response time by 30% through query optimization.
            </li>
            <li>
              Collaborated with UI/UX team and managed version control via
              GitHub.
            </li>
          </ul>
        </div>

        {/* Varcons Technologies */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800">
            Varcons Technologies — MERN Stack Intern
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Built RESTful APIs and integrated MongoDB with Mongoose.</li>
            <li>Developed React components and implemented UI features.</li>
          </ul>
        </div>

        {/* Khyath Tech Media */}
        <div>
          <h3 className="font-bold text-lg text-gray-800">
            Khyath Tech Media — Frontend Intern
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Developed responsive front-end components using React.js.</li>
            <li>Enhanced UI with JavaScript and reusable CSS components.</li>
          </ul>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Certifications
        </h2>
        <ul className="inline-block text-left text-gray-700 leading-relaxed space-y-1">
          <li>✅ JavaScript — Great Learning</li>
          <li>✅ React.js — Coursera</li>
          <li>✅ Node.js — FreeCodeCamp</li>
          <li>✅ NoSQL — Scaler</li>
          <li>✅ Communication Skills — TCS iON</li>
          <li>✅ Software Engineer Intern — HackerRank</li>
        </ul>
      </section>
      {/* Tools & Platforms Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Tools & Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-gray-700 justify-items-center">
          <div className="flex flex-col items-center">
            <VscVscode className="text-4xl text-blue-600" title="VS Code" />
            <p className="mt-1 text-sm font-semibold text-gray-800">VS Code</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-gray-800" title="GitHub" />
            <p className="mt-1 text-sm font-semibold text-gray-800">
              Git & GitHub
            </p>
          </div>

          <div className="flex flex-col items-center">
            <SiPostman className="text-4xl text-orange-500" title="Postman" />
            <p className="mt-1 text-sm font-semibold text-gray-800">Postman</p>
          </div>

          <div className="flex flex-col items-center">
            <SiVercel className="text-4xl text-black" title="Vercel" />
            <p className="mt-1 text-sm font-semibold text-gray-800">Vercel</p>
          </div>

          <div className="flex flex-col items-center">
            <SiJirasoftware className="text-4xl text-blue-500" title="Jira" />
            <p className="mt-1 text-sm font-semibold text-gray-800">Jira</p>
          </div>

          <div className="flex flex-col items-center">
            <SiTrello className="text-4xl text-sky-500" title="Trello" />
            <p className="mt-1 text-sm font-semibold text-gray-800">Trello</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
