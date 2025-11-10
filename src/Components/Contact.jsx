import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Have a question, a project idea, or just want to connect? I’d love to
        hear from you! Fill out the form below or reach out via my social links.
      </p>

      {/* Contact Info */}
      <div className="flex space-x-6 text-3xl mb-8">
        <a
          href="mailto:vijaytnvdaya10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-red-500 transition"
        >
          <FaEnvelope title="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/dayananda-j-v-538763232"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="https://github.com/Jvd200"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <FaGithub title="GitHub" />
        </a>
      </div>

      {/* Contact Form */}
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
