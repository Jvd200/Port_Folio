import React from "react";
import profileImg from "../assets/profile.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 px-6 flex flex-col items-center justify-center">
      {/* --- Profile Image (Top-Right Corner) --- */}
      <div className="absolute top-6 right-6">
        <img
          src={profileImg}
          alt="Dayananda J V"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover border-4 border-blue-200 hover:scale-105 transition-transform"
        />
      </div>

      {/* --- Main Content (Centered Text) --- */}
      <div className="text-center mt-20 md:mt-10 space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Full Stack Developer
        </h1>
        <h3 className="text-xl text-gray-600">
          MERN Stack | Building Scalable Web Apps
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Passionate about building scalable and user-friendly web applications
          following Agile methodologies. Strong understanding of RESTful APIs,
          authentication, and deployment workflows. Eager to contribute to
          collaborative development teams and build real-world web solutions.
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              window.open(
                `${window.location.origin}/Dayananda_JV_FullStack_Developer_Resume_999.pdf`,
                "_blank"
              )
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {" "}
            View Resume{" "}
          </button>
        </div>
      </div>

      {/* --- Footer (Social Links) --- */}
      <footer className="w-full border-t border-gray-200 mt-16 pt-6 text-center">
        <p className="text-gray-700 font-medium">Let’s Connect</p>
        <div className="flex justify-center space-x-6 mt-4 text-2xl">
          <a
            href="mailto:vijaytnvdaya10@gmail.com"
            className="text-gray-700 hover:text-red-500 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Jvd200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dayananda-j-v-538763232"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          © 2025 Dayananda J V | Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default Home;
